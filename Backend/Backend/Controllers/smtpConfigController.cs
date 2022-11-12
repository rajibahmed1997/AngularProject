using Backend.Data;
using Backend.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class smtpConfigController : ControllerBase
    {
        private readonly SmtpConfigCatalogContext _smtpCatalogContext;
        public smtpConfigController(SmtpConfigCatalogContext smtpCatalogContext)
        {
            _smtpCatalogContext = smtpCatalogContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var response = await _smtpCatalogContext.SmtpConfigs.ToListAsync();
            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> AddSmtp([FromBody] SmtpConfig smtpRequest)
        {
            smtpRequest.Id = Guid.NewGuid();
            await _smtpCatalogContext.SmtpConfigs.AddAsync(smtpRequest);
            await _smtpCatalogContext.SaveChangesAsync();
            return Ok(smtpRequest);
        }

        [HttpGet]
        [Route("{id}: Guid")]
        public async Task<IActionResult> GetSmtpById([FromRoute] Guid id)
        {
            var responseWithId =
                await _smtpCatalogContext.SmtpConfigs.FirstOrDefaultAsync(x => x.Id == id);
            if (responseWithId == null)
            {
                return NotFound();
            }
            return Ok(responseWithId);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateSmtpConfig([FromRoute] Guid id, SmtpConfig updateSmtpConfigRequest)
        {
            var response =
                await _smtpCatalogContext.SmtpConfigs.FindAsync(id);
            if (response == null)
            {
                return NotFound();
            }
            response.Host = updateSmtpConfigRequest.Host;
            response.PortNumber = updateSmtpConfigRequest.PortNumber;
            response.UserEmail = updateSmtpConfigRequest.UserEmail;
            response.UserPassword = updateSmtpConfigRequest.UserPassword;
            response.EffectiveFrom = updateSmtpConfigRequest.EffectiveFrom;
            response.EffectiveTo = updateSmtpConfigRequest.EffectiveTo;
            response.SSL = updateSmtpConfigRequest.SSL;

            await _smtpCatalogContext.SaveChangesAsync();
            return Ok(response);
        }


        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteSmtpConfig([FromRoute] Guid id)
        {
            var response =
                await _smtpCatalogContext.SmtpConfigs.FindAsync(id);
            if (response == null)
            {
                return NotFound();
            }
            _smtpCatalogContext.SmtpConfigs.Remove(response);
            await _smtpCatalogContext.SaveChangesAsync();
            return Ok(response);
        }

    }
}
