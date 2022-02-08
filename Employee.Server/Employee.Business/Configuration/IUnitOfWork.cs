using Employee.Business.Repository.EmployeeDetailsRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Business.Configuration
{
    public interface IUnitOfWork
    {
        IEmployeeDetailsRepository EmployeeDetails { get; }
        Task CompleteAsync();
    }
}
