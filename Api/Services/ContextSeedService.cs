using Api.Data;
using Api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Api.Services
{
    public class ContextSeedService
    {
        private readonly Context _context;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public ContextSeedService(Context context,
            UserManager<User> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public async Task InitializeContextAsync()
        {
            if((await _context.Database.GetPendingMigrationsAsync()).Count()>0) 
            {
                //applies any pending migration into our database
                await _context.Database.MigrateAsync();
            }

            if(!_roleManager.Roles.Any()) 
            {
                await _roleManager.CreateAsync(new IdentityRole { Name = SD.AdminRole });
                await _roleManager.CreateAsync(new IdentityRole { Name = SD.ManagerRole });
                await _roleManager.CreateAsync(new IdentityRole { Name = SD.UserRole });
            }

            if (!await _userManager.Users.AnyAsync())
            {
                #region admin
                var admin = new User
                {
                    FirstName = "admin",
                    LastName = "jacson",
                    UserName = SD.AdminUserName,
                    Email = SD.AdminUserName,
                    EmailConfirmed = true
                };
                await _userManager.CreateAsync(admin, "123456");
                await _userManager.AddToRolesAsync(admin, new[] { SD.AdminRole, SD.ManagerRole, SD.UserRole });
                await _userManager.AddClaimsAsync(admin, new Claim[]
                {
                    new Claim(ClaimTypes.Email, admin.Email),
                    new Claim(ClaimTypes.Surname, admin.LastName)
                });
                #endregion

                #region manager

                var manager = new User
                {
                    FirstName = "manager",
                    LastName = "wilson",
                    UserName = "manager@example.com",
                    Email = "manager@example.com",
                    EmailConfirmed = true
                };
                await _userManager.CreateAsync(manager, "123456");
                await _userManager.AddToRoleAsync(manager, SD.ManagerRole);
                await _userManager.AddClaimsAsync(manager, new Claim[]
                {
                    new Claim(ClaimTypes.Email, manager.Email),
                    new Claim(ClaimTypes.Surname, manager.LastName)
                });

                #endregion

                #region user 
                var user = new User
                {
                    FirstName = "user",
                    LastName = "miller",
                    UserName = "user@example.com",
                    Email = "user@example.com",
                    EmailConfirmed = true
                };
                await _userManager.CreateAsync(user, "123456");
                await _userManager.AddToRoleAsync(user, SD.UserRole);
                await _userManager.AddClaimsAsync(user, new Claim[]
                {
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(ClaimTypes.Surname, user.LastName)
                });
                #endregion

                #region vipuser 
                var vipuser = new User
                {
                    FirstName = "vipuser",
                    LastName = "tomson",
                    UserName = "vipuser@example.com",
                    Email = "vipuser@example.com",
                    EmailConfirmed = true
                };
                await _userManager.CreateAsync(vipuser, "123456");
                await _userManager.AddToRoleAsync(vipuser, SD.UserRole);
                await _userManager.AddClaimsAsync(vipuser, new Claim[]
                {
                    new Claim(ClaimTypes.Email, vipuser.Email),
                    new Claim(ClaimTypes.Surname, vipuser.LastName)
                });
                #endregion
            }
        }
    }
}
