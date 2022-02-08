using Employee.Entity.Entities;
using Employee.Business.Repository.EmployeeDetailsRepository;
using Employee.Business.Services.EmployeeDetailsServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace Employee.Business.Services.EmployeeDetailsServices
{
    public class EmployeeDetailsServices : IEmployeeDetailsServices
    {
        private IEmployeeDetailsRepository _employeeDetailsRepository;
        private readonly ILogger<EmployeeDetailsServices> _logger;
        public EmployeeDetailsServices(IEmployeeDetailsRepository employeeDetailsRepository, ILogger<EmployeeDetailsServices> logger)
        {
            this._employeeDetailsRepository = employeeDetailsRepository;
            this._logger = logger;
        }

        public async Task<IEnumerable<EmployeeDetails>> GetEmployeesAsync()
        {
            return await _employeeDetailsRepository.GetAllAsync();
        }
        public async Task<EmployeeDetails> GetEmployeeByIdAsync(long Id)
        {
            return await _employeeDetailsRepository.GetByIdAsync(Id);
        }

        public async Task<EmployeeDetails> AddEmployeeAsync(EmployeeDetails EmployeeDetails)
        {
            try
            {
                await _employeeDetailsRepository.AddAsync(EmployeeDetails);
                return EmployeeDetails;
            }
            catch (Exception ex)
            {
                _logger.LogInformation("Error dusing AddEmployeeAsync" + ex.Message);
                return null;
            }
        }

        public async Task<EmployeeDetails> UpdateEmployeeAsync(long id, EmployeeDetails EmployeeDetails)
        {
            try
            {
                return await _employeeDetailsRepository.UpdateAsync(id, EmployeeDetails);
            }
            catch (Exception ex)
            {
                _logger.LogInformation("Error dusing UpdateEmployeeAsync" + ex.Message);
                return null;
            }
        }

        public async Task<int> DeleteEmployeeAsync(EmployeeDetails EmployeeDetails)
        {
            try
            {
                return await _employeeDetailsRepository.DeleteAsync(EmployeeDetails);
            }
            catch (Exception ex)
            {
                _logger.LogInformation("Error dusing AddEmployeeAsync" + ex.Message);
                return 0;
            }
        }
    }
}
