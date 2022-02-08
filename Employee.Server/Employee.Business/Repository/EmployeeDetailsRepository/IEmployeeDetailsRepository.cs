using Employee.Entity.Entities;
using Employee.Business.Repository.GenericRepository;

namespace Employee.Business.Repository.EmployeeDetailsRepository
{

    public interface IEmployeeDetailsRepository : IGenericRepository<EmployeeDetails>
    {
    }
}
