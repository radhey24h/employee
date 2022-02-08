using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Employee.Business.Services.EmployeeDetailsServices;
using System;
using System.Text;
using System.Threading.Tasks;
using Employee.Entity.Entities;
using Microsoft.Extensions.Logging;
using Employee.Business.Configuration;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Employee.WebAPI.Controllers
{
    [Route("api/[action]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

        private readonly IEmployeeDetailsServices _employeeDetailsServices;
        private readonly IUnitOfWork _unitOfWork;

        private readonly IConfiguration _configuration;
        private readonly ILogger<EmployeeController> _logger;

        public EmployeeController(IUnitOfWork unitOfWork, IEmployeeDetailsServices employeeDetailsServices, IConfiguration configuration, ILogger<EmployeeController> logger)
        {
            this._unitOfWork = unitOfWork;
            this._employeeDetailsServices = employeeDetailsServices;
            this._configuration = configuration;
            this._logger = logger;
        }
        [HttpGet]
        public async Task<IActionResult> GetEmployees()
        {
            _logger.LogInformation("GetEmployees");
            var results = await _unitOfWork.EmployeeDetails.GetAllAsync();
            if (results == null)
                return BadRequest();

            return Ok(results);
        }

        // GET api/<EmployeeController>/5
        [HttpGet]
        public async Task<IActionResult> GetEmployee(long id)
        {
            _logger.LogInformation("GetEmployee");
            var results = await _employeeDetailsServices.GetEmployeeByIdAsync(id);
            if (results == null)
                return BadRequest();

            return Ok(results);
        }

        // POST api/<EmployeeController>
        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] EmployeeDetails employeeDetails)
        {
            _logger.LogInformation("AddEmployee");
            var result = await _employeeDetailsServices.AddEmployeeAsync(employeeDetails);
            if (result == null)
                return BadRequest();
            _logger.LogInformation("AddEmployee", result);
            return Ok(result);
        }

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee(long id, [FromBody] EmployeeDetails employee)
        {
            _logger.LogInformation("UpdateEmployee");
            var result = await _employeeDetailsServices.UpdateEmployeeAsync(id, employee);
            if (result == null)
                return BadRequest();
            _logger.LogInformation("UpdateEmployee", result);
            return Ok(result);
        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(long Id)
        {
            _logger.LogInformation("DeleteEmployee");
            var employee = await _employeeDetailsServices.GetEmployeeByIdAsync(Id);
            var result = await _employeeDetailsServices.DeleteEmployeeAsync(employee);
            if (result == 0)
                return BadRequest();
            _logger.LogInformation("DeleteEmployee", result);
            return Ok(result);
        }
    }
}
