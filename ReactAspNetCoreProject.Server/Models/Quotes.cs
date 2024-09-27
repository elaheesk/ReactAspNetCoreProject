using System.ComponentModel.DataAnnotations;

namespace ReactAspNetCoreProject.Server.Models
{
    public class Quotes
    {
        [Key]
        public Guid UserId { get; set; }
      

        [Required]
        public string? Name { get; set; }


        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        public string? Content { get; set; }


        public string? ContentId { get; set; }

        [Required]
        public DateTime Date { get; set; }
    }
}
