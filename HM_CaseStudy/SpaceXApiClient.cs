using HM_CaseStudy;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Threading.Tasks;

public class SpaceXApiClient
{
    private readonly HttpClient _httpClient;

    public SpaceXApiClient()
    {
        _httpClient = new HttpClient();
        _httpClient.BaseAddress = new Uri("https://api.spacexdata.com/v4/");
    }

    public async Task<Launch[]> GetLaunches()
    {
        HttpResponseMessage response = await _httpClient.GetAsync("launches");
        response.EnsureSuccessStatusCode();
        string content = await response.Content.ReadAsStringAsync();
        Launch[] pastLaunches = JsonConvert.DeserializeObject<Launch[]>(content);
        return pastLaunches;
    }

    public async Task<Launch[]> GetPastLaunches()
    {
        HttpResponseMessage response = await _httpClient.GetAsync("launches/past");
        response.EnsureSuccessStatusCode();
        string content = await response.Content.ReadAsStringAsync();
        Launch[] pastLaunches = JsonConvert.DeserializeObject<Launch[]>(content);
        return pastLaunches;
    }

    public async Task<Launch[]> GetUpcomingLaunches()
    {
        HttpResponseMessage response = await _httpClient.GetAsync("launches/upcoming");
        response.EnsureSuccessStatusCode();
        string content = await response.Content.ReadAsStringAsync();
        Launch[] upcomingLaunches = JsonConvert.DeserializeObject<Launch[]>(content);
        return upcomingLaunches;
    }

    public async Task<LaunchDetails> GetLaunchDetails(string id)
    {
        string apiUrl = $"https://api.spacexdata.com/v4/launches/{id}";

        HttpResponseMessage response = await _httpClient.GetAsync(apiUrl);
        if (response.IsSuccessStatusCode)
        {
            string json = await response.Content.ReadAsStringAsync();
            LaunchDetails launchDetails = JsonConvert.DeserializeObject<LaunchDetails>(json);
            return launchDetails;
        }
        else
        {
            throw new Exception($"Failed to fetch launch details. StatusCode: {response.StatusCode}");
        }
    }
}