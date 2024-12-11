using Microsoft.AspNetCore.Mvc;
using ReactAspNetCoreProject.Server.Models;

namespace ReactAspNetCoreProject.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        private static List<QuotesModel> _quotesList = new List<QuotesModel>();
        [HttpPost]
        public IActionResult PostFormData([FromBody] QuotesModel model)
        {
            if (ModelState.IsValid)
            {
                _quotesList.Add(model);
                return Ok(new { success = true, message = "Quote added successfully", data = _quotesList });
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpGet]
        public IActionResult GetFormData()
        {
            if (_quotesList.Any())
            {
                return Ok(_quotesList);
            }
            else
            {
                return Ok(new { success = true, message = "No quotes found. Feel free to add quotes.", data = new List<QuotesModel>() });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteQuote(string id)
        {

            var findQuote = _quotesList.Where(quote => quote.UserId.ToString() == id).FirstOrDefault();
            if (findQuote != null)
            {
                _quotesList.Remove(findQuote);
            }

            return Ok(new { success = true, message = "Quote removed successfully successfully", data = _quotesList });
        }


        [HttpPut("{id}")]
        public IActionResult UpdateQuote(string id, [FromBody] QuotesModel updatedQuote)
        {
            var existingQuote = _quotesList.FirstOrDefault(quote => quote.UserId.ToString() == id);
            if (existingQuote == null)
            {
                return NotFound(new { success = false, message = "Quote not found" });
            }

            // Update only mutable properties
            existingQuote.Content = updatedQuote.Content;
            existingQuote.Date = updatedQuote.Date;
            existingQuote.Name = updatedQuote.Name;
            existingQuote.Email = updatedQuote.Email;

            return Ok(new { success = true, message = "Quote updated successfully", data = _quotesList });
        }
    }
}
