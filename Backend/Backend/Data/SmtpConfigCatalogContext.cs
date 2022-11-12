using Backend.Model;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class SmtpConfigCatalogContext : DbContext
    {
        public SmtpConfigCatalogContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<SmtpConfig> SmtpConfigs { get; set; }
    }
}
