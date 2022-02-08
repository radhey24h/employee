using Employee.Entity.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Employee.Business.Services.EmployeeDetailsServices
{
    public interface IEmployeeDetailsServices
    {
        Task<IEnumerable<EmployeeDetails>> GetEmployeesAsync();
        Task<EmployeeDetails> GetEmployeeByIdAsync(long Id);
        Task<EmployeeDetails> AddEmployeeAsync(EmployeeDetails EmployeeDetails);
        Task<EmployeeDetails> UpdateEmployeeAsync(long id, EmployeeDetails EmployeeDetails);
        Task<int> DeleteEmployeeAsync(EmployeeDetails EmployeeDetails);
    }
}
