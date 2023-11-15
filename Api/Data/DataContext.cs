using Api.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class DataContext : IdentityDbContext<User>, IDataContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<WaterConsumption> Consumptions { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
        public DbSet<KievTmp> KievPoints { get; set; }
    }
}
