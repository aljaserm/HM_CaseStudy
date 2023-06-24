using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HM_CaseStudy;

namespace HM_CaseStudy.Controllers
{
    [ApiController]
    [Route("api/launches")]
    public class LaunchesController : ControllerBase
    {
        private readonly SpaceXApiClient _spaceXApiClient;

        public LaunchesController(SpaceXApiClient spaceXApiClient)
        {
            _spaceXApiClient = spaceXApiClient;
        }

        [HttpGet("past")]
        public async Task<IActionResult> GetPastLaunches()
        {
            Launch[] pastLaunches = await _spaceXApiClient.GetPastLaunches();
            return Ok(pastLaunches);
        }

        [HttpGet("upcoming")]
        public async Task<IActionResult> GetUpcomingLaunches()
        {
            Launch[] upcomingLaunches = await _spaceXApiClient.GetUpcomingLaunches();
            return Ok(upcomingLaunches);
        }

        [HttpGet("launches/{id}")]
        public async Task<IActionResult> GetLaunchDetails(string id)
        {
            LaunchDetails launchDetails = await _spaceXApiClient.GetLaunchDetails(id);
            if (launchDetails != null)
            {
                return Ok(launchDetails);
            }
            else
            {
                return NotFound();
            }
        }

    }
}
