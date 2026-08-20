using services;
using interfaces;
using endpoints;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpClient<ICardmarketService, CardmarketService>(client =>
{
    client.BaseAddress = new Uri("https://cardmarket-api-tcg.p.rapidapi.com/");
    client.DefaultRequestHeaders.Add("x-rapidapi-key", builder.Configuration["RAPIDAPI_KEY"]);
    client.DefaultRequestHeaders.Add("x-rapidapi-host", "cardmarket-api-tcg.p.rapidapi.com");
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAny", policy =>
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader());
});

var app = builder.Build();
app.UseCors("AllowAny");
app.MapPokemonEndpoints();
app.Run();

