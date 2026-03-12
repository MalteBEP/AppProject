using services;
using interfaces;

namespace endpoints;

public static class CardmarketEndpoints
{
    public static void MapPokemonEndpoints(this WebApplication app)
    {
        app.MapGet("/pokemon/cards/search", async (ICardmarketService service, string name) =>
            {
                var result = await service.SearchPokemonCards(name);
                return Results.Json(result);
            });
    }
}