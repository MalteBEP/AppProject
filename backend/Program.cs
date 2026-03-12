using services;
using interfaces;
using endpoints;
using infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpClient();
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
builder.Services.AddSingleton<ClientFactoryService>();
builder.Services.AddScoped<ICardmarketService, CardmarketService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowExpo", policy =>
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader());
});

var app = builder.Build();
app.UseCors("AllowExpo");
app.MapPokemonEndpoints();
app.Run();

