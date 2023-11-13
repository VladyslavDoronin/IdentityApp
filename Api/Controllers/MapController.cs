using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MapController : ControllerBase
    {
        [HttpGet("get-map")]
        public IActionResult Map()
        {
            return Ok(new JsonResult(new { message = "Only authorize users can view map" }));
        }
    }
}
