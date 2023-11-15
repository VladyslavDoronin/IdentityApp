using Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Repositories
{
    public interface IKievTmpRepository
    {
        Task<IEnumerable<KievTmp>> GetAll();
    }
}
