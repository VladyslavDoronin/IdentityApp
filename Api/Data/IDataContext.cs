using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public interface IDataContext
    {
        public DbSet<WaterConsumption> Consumptions { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
        int SaveChanges();
    }
}
