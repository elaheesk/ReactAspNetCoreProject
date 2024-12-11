using Microsoft.AspNetCore.Mvc;
using ReactAspNetCoreProject.Server.Data;
using ReactAspNetCoreProject.Server.Models;

namespace ReactAspNetCoreProject.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        private readonly AppDbContext _context;

        public FormController(AppDbContext context)
        {
            _context = context; // Inject AppDbContext
        }


        [HttpPost]
        public IActionResult PostFormData([FromBody] QuotesModel model)
        {
            if (ModelState.IsValid)
            {
                _context.Quotes.Add(model);
                _context.SaveChanges();
                return Ok(new { success = true, message = "Quote added successfully", data = model });
            }
            else
            {
                return BadRequest(ModelState);
            }

        }

        [HttpGet]
        public IActionResult GetFormData()
        {
            var quotes = _context.Quotes.ToList();

            if (quotes.Any())
            {
                return Ok(quotes); // Return the list of quotes
            }
            else
            {
                return Ok(new { success = true, message = "No quotes found. Feel free to add quotes.", data = new List<QuotesModel>() });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteQuote(string id)
        {
            if (!Guid.TryParse(id, out var parsedId))
            {
                return BadRequest(new { success = false, message = "Invalid ID format" });
            }

            var findQuote = _context.Quotes.FirstOrDefault(quote => quote.UserId == parsedId);
            if (findQuote == null)
            {
                // Return 404 if the quote does not exist
                return NotFound(new { success = false, message = "Quote not found" });
            }
            _context.Quotes.Remove(findQuote);
            _context.SaveChanges();
            var updatedQuotes = _context.Quotes.ToList();
            return Ok(new { success = true, message = "Quote removed successfully successfully", data = updatedQuotes });
        }


        [HttpPut("{id}")]
        public IActionResult UpdateQuote(string id, [FromBody] QuotesModel updatedQuote)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (!Guid.TryParse(id, out var parsedId))
            {
                return BadRequest(new { success = false, message = "Invalid ID format" });
            }
            var existingQuote = _context.Quotes.FirstOrDefault(quote => quote.UserId == parsedId);
            if (existingQuote == null)
            {
                return NotFound(new { success = false, message = "Quote not found" });
            }

            // Update only mutable properties
            existingQuote.Content = updatedQuote.Content;
            existingQuote.Date = updatedQuote.Date;
            existingQuote.Name = updatedQuote.Name;
            existingQuote.Email = updatedQuote.Email;

            _context.SaveChanges();
            return Ok(new { success = true, message = "Quote updated successfully", data = existingQuote });
        }
    }
}
