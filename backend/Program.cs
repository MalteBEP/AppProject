using Microsoft.EntityFrameworkCore;
using System.Net.Http.Headers;
using services;
using interfaces;
using endpoints;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpClient();
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
builder.Services.AddSingleton<IClientFactoryService, ClientFactoryService>();

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

