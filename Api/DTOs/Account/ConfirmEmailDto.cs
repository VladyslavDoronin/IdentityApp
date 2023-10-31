using System.ComponentModel.DataAnnotations;

namespace Api.DTOs.Account
{
    public class ConfirmEmailDto
    {
        [Required]
        public string Token { get; set; }
        [Required]
        [RegularExpression("^.+@[^\\.].*\\.[a-z]{2,}$", ErrorMessage = "Invalid email address")]
        public string Email { get; set; }
    }
}
