using System.ComponentModel.DataAnnotations;

namespace myCV.Models
{
    public class CurriculumVitae{
        [Key]
        public int IdCV { get; set; }
        public string FullName { get; set; }
        public string Icon { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Description { get; set; }
        public string Profession { get; set; }
    }
} 