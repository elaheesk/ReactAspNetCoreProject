using System.ComponentModel.DataAnnotations;

namespace ReactAspNetCoreProject.Server.Models
{
    public class QuotesModel
    {
        [Key]
        public Guid UserId { get; set; } = Guid.NewGuid();    
        [Required]
        public string? Content { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public string Name { get; set; }
        [EmailAddress]
        public string Email { get; set; }
    }
}
