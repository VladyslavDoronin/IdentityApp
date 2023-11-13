using Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Repositories
{
    public interface IWaterConsumptionRepository
    {
        Task<IEnumerable<WaterConsumption>> GetAll();
        Task<IEnumerable<WaterConsumption>> GetTopTenConsumpers();
    }
}
