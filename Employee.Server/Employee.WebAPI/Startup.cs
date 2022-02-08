using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Employee.Business.DataContext;
using Microsoft.EntityFrameworkCore;
using Employee.Business.Repository.EmployeeDetailsRepository;
using Employee.Business.Services.EmployeeDetailsServices;
using System.Text.Json.Serialization;
using Employee.Business.Configuration;

namespace Employee.WebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            services.AddControllers();
            services.AddDbContext<EmployeeDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddScoped<EmployeeDbContext>();

            services.AddScoped<IEmployeeDetailsRepository, EmployeeDetailsRepository>();
            services.AddScoped<IEmployeeDetailsServices, EmployeeDetailsServices>();

            services.AddSingleton(typeof(ILogger), typeof(Logger<Startup>));

            services.AddControllers().AddNewtonsoftJson();

            services.AddCors(options => {
                options.AddDefaultPolicy(
                    builder => {
                        builder.WithOrigins("http://20.204.176.158",
                                            "http://localhost:3000").SetIsOriginAllowed((host) => true)
            .AllowAnyMethod()
            .AllowAnyHeader();
                    });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, EmployeeDbContext db)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            db.Database.EnsureCreated();
                        
            app.UseHttpsRedirection();

            app.UseCors();

            app.UseRouting();
                     

            app.UseAuthorization();

            app.UseEndpoints(endpoints => {
                endpoints.MapControllers();
            });
        }
    }
}
