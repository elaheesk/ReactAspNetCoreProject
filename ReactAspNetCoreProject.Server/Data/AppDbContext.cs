namespace ReactAspNetCoreProject.Server.Data
{
    using Microsoft.EntityFrameworkCore;
    using ReactAspNetCoreProject.Server.Models;

    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<QuotesModel> Quotes { get; set; } // Define the Quotes table
    }

}
