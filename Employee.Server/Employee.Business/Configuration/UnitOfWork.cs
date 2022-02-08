using Employee.Business.DataContext;
using Employee.Business.Repository.EmployeeDetailsRepository;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Business.Configuration
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly EmployeeDbContext _context;
        private readonly ILogger _logger;

        public IEmployeeDetailsRepository EmployeeDetails { get; private set; }

        public UnitOfWork(EmployeeDbContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger("logs");

            EmployeeDetails = new EmployeeDetailsRepository(context, _logger);
        }

        public async Task CompleteAsync()
        {
            await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
