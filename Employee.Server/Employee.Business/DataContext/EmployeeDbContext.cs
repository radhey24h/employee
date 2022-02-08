using Microsoft.EntityFrameworkCore;
using Employee.Entity.Entities;

namespace Employee.Business.DataContext
{
    public class EmployeeDbContext : DbContext
    {
        public EmployeeDbContext(DbContextOptions options)
            : base(options)
        {
        }
        public DbSet<EmployeeDetails> EmployeeDetails { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EmployeeDetails>().HasKey(x => new { x.ID});
            modelBuilder.Entity<EmployeeDetails>().HasData(
                new EmployeeDetails {
                    ID=1,
                    FirstName = "William",
                    MiddleName = "",
                    LastName = "Shakespeare",

                    Email = "William.Shakespeare@gmail.com",
                    MobileNumber = "9650065900",

                    Address = "J-1103, UK",
                    ContractType = "Permanent",

                    StartDate = System.DateTime.Now,
                    EndDate = System.DateTime.Now,

                    JobType = "FullTime",
                    HourPerWeek = 30,
                    WorkingFrom = (System.DateTime.Now.Year - 1)
                },
                 new EmployeeDetails {
                     ID=2,
                     FirstName = "Jane",
                     MiddleName = "",
                     LastName = "Shakespeare",

                     Email = "Jane.Shakespeare@gmail.com",
                     MobileNumber = "9650065900",

                     Address = "J-1103, UK",
                     ContractType = "Contract",

                     StartDate = System.DateTime.Now,
                     EndDate = System.DateTime.Now,

                     JobType = "PartTime",
                     HourPerWeek = 40,
                     WorkingFrom= (System.DateTime.Now.Year - 2)
                 },
                 new EmployeeDetails {
                     ID=3,
                     FirstName = "Oli",
                     MiddleName = "",
                     LastName = "Shakespeare",

                     Email = "Oli.Shakespeare@gmail.com",
                     MobileNumber = "9650065900",

                     Address = "J-1103, UK",
                     ContractType = "Contract",

                     StartDate = System.DateTime.Now,
                     EndDate = System.DateTime.Now,

                     JobType = "PartTime",
                     HourPerWeek = 30,
                     WorkingFrom = (System.DateTime.Now.Year - 3)
                 },
                 new EmployeeDetails {
                     ID = 4,
                     FirstName = "Ku",
                     MiddleName = "S",
                     LastName = "Shakespeare",

                     Email = "Ku.Shakespeare@gmail.com",
                     MobileNumber = "9650065900",

                     Address = "J-1103, UK",
                     ContractType = "Permanent",

                     StartDate = System.DateTime.Now,
                     EndDate = System.DateTime.Now,

                     JobType = "PartTime",
                     HourPerWeek = 30,
                     WorkingFrom = (System.DateTime.Now.Year - 4)
                 },
                 new EmployeeDetails {
                     ID = 5,
                     FirstName = "James",
                     MiddleName = "P",
                     LastName = "Shakespeare",

                     Email = "James.Shakespeare@gmail.com",
                     MobileNumber = "9650065900",

                     Address = "J-1103, UK",
                     ContractType = "Contract",

                     StartDate = System.DateTime.Now,
                     EndDate = System.DateTime.Now,

                     JobType = "PartTime",
                     HourPerWeek = 40,
                     WorkingFrom = (System.DateTime.Now.Year - 5)
                 }
            );
        }
    }
}