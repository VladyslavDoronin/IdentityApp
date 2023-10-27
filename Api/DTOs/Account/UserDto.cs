namespace Api.DTOs.Account
{ 
    /// <summary>
    /// DTO - Data transfer object
    /// </summary>
    public class UserDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string JWT { get; set; }
    }
}
