using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee.Entity.Entities
{
    public class EmployeeDetails
    {
        [Key]
        public long ID { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }

        public string Email { get; set; }
        [MaxLength(10)]
        public string MobileNumber { get; set; }
        public string Address { get; set; }

        public string ContractType { get; set; }

        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }

        public string JobType { get; set; }
        public int? HourPerWeek { get; set; }
        public int? WorkingFrom { get; set; }
    }
}
