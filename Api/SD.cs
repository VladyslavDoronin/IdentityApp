﻿using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace Api
{
    public static class SD
    {
        public const string Facebook = "facebook";
        public const string Google = "google";

        //Roles
        public const string AdminRole = "Admin";
        public const string ManagerRole = "Manager";
        public const string UserRole = "User";

        public const string AdminUserName = "admin@example.com";
        public const string SuperAdminChangeNotAllow = "Supper Admin change is not allowed";
        public const int MaximumLoginAttempts = 3;

        public static bool VIPPolicy(AuthorizationHandlerContext context)
        {
            if(context.User.IsInRole(UserRole) && 
                context.User.HasClaim(x=>x.Type == ClaimTypes.Email && x.Value.Contains("vip")))
            {
                return true;
            }
            
            return false; 
        }
    }
}
