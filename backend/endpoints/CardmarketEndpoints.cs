using services;

namespace endpoints;

public static class CardmarketEndpoints 
{

    public static void MapPokemonEndpoints(this WebApplication app) {
        app.MapGet("/pokemon/cards/search", async (ClientFactoryService factory, string name) =>
        {
            var client = factory.CreateCardmarketClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri($"https://cardmarket-api-tcg.p.rapidapi.com/pokemon/cards/search?search={Uri.EscapeDataString(name)}&sort=relevance"),
                
            };

            using (var response = await client.SendAsync(request))
            {
                response.EnsureSuccessStatusCode();
                var body = await response.Content.ReadAsStringAsync();
                return Results.Text(body, "application/json");
            }

        });

    }   

}