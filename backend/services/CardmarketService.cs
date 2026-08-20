using System.Text.Json;
using interfaces;

namespace services;

public class CardmarketService : ICardmarketService
{
    private readonly HttpClient _client;

    public CardmarketService(HttpClient client)
    {
        _client = client;
    }
    
    public async Task<JsonElement> SearchPokemonCards(string name)
    {
        var url = $"pokemon/cards/search?search={Uri.EscapeDataString(name)}&sort=relevance";

        var stream = await _client.GetStreamAsync(url);
        using var jsonDoc = await JsonDocument.ParseAsync(stream);
        
        return jsonDoc.RootElement.Clone();
    }
}