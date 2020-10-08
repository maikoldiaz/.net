using Microsoft.EntityFrameworkCore;
using myCV.Models;
namespace myCV.Context{
    public class AppDbContext : DbContext{
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {
        }

        public DbSet<CurriculumVitae> CurriculumVitae { get; set; }
    }

}