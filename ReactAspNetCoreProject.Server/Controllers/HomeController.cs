using Microsoft.AspNetCore.Mvc;

namespace ReactAspNetCoreProject.Server.Controllers
{
    public class HomeController : Controller
    {

        [HttpGet(Name = "Home")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
