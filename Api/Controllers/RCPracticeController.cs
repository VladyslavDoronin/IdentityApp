using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RCPracticeController : ControllerBase
    {
        [HttpGet("public")]
        public IActionResult Public()
        {
            return Ok("public");
        }

        #region Roles 


        [HttpGet("admin-role")]
        [Authorize(Roles = "Admin")]
        public IActionResult AdminRole()
        {
            return Ok("admin role");
        }

        [HttpGet("manager-role")]
        [Authorize(Roles = "Manager")]
        public IActionResult ManagerRole()
        {
            return Ok("manager role");
        }

        [HttpGet("user-role")]
        [Authorize(Roles = "User")]
        public IActionResult UserRole()
        {
            return Ok("user role");
        }

        [HttpGet("admin-or-manager-role")]
        [Authorize(Roles = "Admin,Manager")]
        public IActionResult AdminOrManagerRole()
        {
            return Ok("admin or manager role");
        }

        [HttpGet("admin-or-user-role")]
        [Authorize(Roles = "Admin,User")]
        public IActionResult AdminOrUserRole()
        {
            return Ok("admin or user role");
        }
        #endregion

        #region Policy
        [HttpGet("admin-policy")]
        [Authorize(policy: "AdminPolicy")]
        public IActionResult AdminPolicy()
        {
            return Ok("admin policy");
        }

        [HttpGet("manager-policy")]
        [Authorize(policy: "ManagerPolicy")]
        public IActionResult ManagerPolicy()
        {
            return Ok("manager policy");
        }

        [HttpGet("user-policy")]
        [Authorize(policy: "UserPolicy")]
        public IActionResult UserPolicy()
        {
            return Ok("user policy");
        }

        [HttpGet("admin-or-manager-policy")]
        [Authorize(policy: "AdminOrManagerPolicy")]
        public IActionResult AdminOrManagerPolicy()
        {
            return Ok("Admin Or Manager policy");
        }

        [HttpGet("admin-And-manager-policy")]
        [Authorize(policy: "AdminAndManagerPolicy")]
        public IActionResult AdminAndManagerPolicy()
        {
            return Ok("Admin And Manager policy");
        }

        [HttpGet("all-role-policy")]
        [Authorize(policy: "AllRolePolicy")]
        public IActionResult AllRolePolicy()
        {
            return Ok("All Role policy");
        }
        #endregion

        #region ClaimPolicy

        [HttpGet("admin-email-policy")]
        [Authorize(policy: "AdminEmailPolicy")]
        public IActionResult AdminEmailPolicy()
        {
            return Ok("Admin Email Policy");
        }

        [HttpGet("miller-surname-policy")]
        [Authorize(policy: "MillerSurnamePolicy")]
        public IActionResult MillerSurnamePolicy()
        {
            return Ok("Miller Surname Policy");
        }

        [HttpGet("manager-email-and-wilson-surname-policy")]
        [Authorize(policy: "ManagerEmailAndWilsonSurnamePolicy")]
        public IActionResult ManagerEmailAndWilsonSurnamePolicy()
        {
            return Ok("Manager Email And Wilson Surname Policy");
        }

        [HttpGet("vip-policy")]
        [Authorize(policy: "VIPPolicy")]
        public IActionResult VIPPolicy()
        {
            return Ok("VIP Policy");
        }

        #endregion
    }
}
