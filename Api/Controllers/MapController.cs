using Api.Models;
using Api.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MapController : ControllerBase
    {
        private readonly IKievTmpRepository _kievTmpRepository;
        
        public MapController(IKievTmpRepository kievTmpRepository)
        {
            this._kievTmpRepository = kievTmpRepository;
        }

        [HttpGet("get-map")]
        public async Task<ActionResult<IEnumerable<KievTmp>>> Map()
        {
            var data = await this._kievTmpRepository.GetAll();
            return Ok(data);
        }
    }
}
