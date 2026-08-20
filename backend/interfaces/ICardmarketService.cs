using System.Text.Json;

namespace interfaces;

public interface ICardmarketService
{
    Task<JsonElement> SearchPokemonCards(string name);
}