using infrastructure;
using interfaces;

namespace services;

public class CardmarketService : ICardmarketService
{
    private readonly ClientFactoryService _factory;

    public CardmarketService(ClientFactoryService factory)
    {
        _factory = factory;
    }
    
    public async Task<string> SearchPokemonCards(string name)
    {
        var client = _factory.CreateCardmarketClient();

        var request = new HttpRequestMessage
        {
            Method = HttpMethod.Get,
            RequestUri = new Uri(
                $"https://cardmarket-api-tcg.p.rapidapi.com/pokemon/cards/search?search={Uri.EscapeDataString(name)}&sort=relevance"
            )
        };

        using var response = await client.SendAsync(request);

        response.EnsureSuccessStatusCode();

        return await response.Content.ReadAsStringAsync();
    }
}