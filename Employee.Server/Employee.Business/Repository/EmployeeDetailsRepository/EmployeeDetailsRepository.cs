using Employee.Entity.Entities;
using Employee.Business.DataContext;
using Employee.Business.Repository.GenericRepository;

namespace Employee.Business.Repository.EmployeeDetailsRepository
{
    public class EmployeeDetailsRepository : GenericRepository<EmployeeDetails>, IEmployeeDetailsRepository
    {
        public EmployeeDetailsRepository(EmployeeDbContext context) : base(context)
        {
        }
    }
}
