using services;
using interfaces;

namespace endpoints;

public static class CardmarketEndpoints
{
    public static void MapPokemonEndpoints(this WebApplication app)
    {
        app.MapGet("/pokemon/cards/search", async (ICardmarketService service, string name) =>
            {
                var body = await service.SearchPokemonCards(name);
                return Results.Text(body, "application/json");
            });
    }
}