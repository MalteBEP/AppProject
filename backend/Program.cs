using Microsoft.EntityFrameworkCore;
using System.Net.Http.Headers;
using services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpClient();
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
builder.Services.AddSingleton<ClientFactoryService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowExpo", policy =>
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader());
});

var app = builder.Build();
app.UseCors("AllowExpo");

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

app.Run();

