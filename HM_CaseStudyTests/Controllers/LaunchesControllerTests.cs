using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Threading.Tasks;
using HM_CaseStudy.Controllers;
using HM_CaseStudy;
using Microsoft.AspNetCore.Mvc;

namespace HM_CaseStudy.Tests
{
    [TestClass]
    public class LaunchesControllerTests
    {
        private LaunchesController _controller;
        private Mock<SpaceXApiClient> _spaceXApiClientMock;

        [TestInitialize]
        public void Initialize()
        {
            _spaceXApiClientMock = new Mock<SpaceXApiClient>();
            _controller = new LaunchesController(_spaceXApiClientMock.Object);
        }

        [TestMethod]
        public async Task GetPastLaunches_ReturnsOkResult()
        {
            // Act
            IActionResult result = await _controller.GetPastLaunches();

            // Assert
            Assert.IsInstanceOfType(result, typeof(OkObjectResult));
        }

        [TestMethod]
        public async Task GetUpcomingLaunches_ReturnsOkResult()
        {
            // Act
            IActionResult result = await _controller.GetUpcomingLaunches();

            // Assert
            Assert.IsInstanceOfType(result, typeof(OkObjectResult));
        }

        [TestMethod]
        public async Task GetLaunchDetails_WithInvalidId_ReturnsNotFoundResult()
        {
            // Arrange
            string invalidId = "invalid-id";
            _spaceXApiClientMock
                .Setup(mock => mock.GetLaunchDetails(invalidId))
                .ReturnsAsync((LaunchDetails)null);

            // Act
            IActionResult result = await _controller.GetLaunchDetails(invalidId);

            // Assert
            Assert.IsInstanceOfType(result, typeof(NotFoundResult));
        }


    }
}
