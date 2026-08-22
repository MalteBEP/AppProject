using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using NUnit.Framework;
using RichardSzalay.MockHttp;
using services;

namespace Backend.Tests.Services;

[TestFixture]
[TestOf(typeof(CardmarketService))]
public class CardmarketServiceTest
{

    /// <summary>
    /// AAA PATTERN
    ///
    /// Arrange, Act, Assert
    /// </summary>
    
    [Test]
    public async Task SearchPokemonCardsShouldNotBeEmpty()
    {
        
        var mockHttp = new MockHttpMessageHandler();
        mockHttp.When("http://localhost/pokemon/cards/search*").Respond("application/json", """{"data": [{"name": "Pikachu"}]}""");
        
        var client = mockHttp.ToHttpClient();
        client.BaseAddress = new Uri("http://localhost/");

        var service = new CardmarketService(client);
        JsonElement result = await service.SearchPokemonCards("pikachu");
        
        Assert.That(result.TryGetProperty("data", out var data),  Is.True);
        Assert.That(data.GetArrayLength(), Is.GreaterThan(0));
        Assert.That(data[0].GetProperty("name").GetString(), Is.EqualTo("Pikachu"));
    }
    
    [Test]
    public async Task SearchPokemonCardsEmptyInputShouldReturnCardNumberOne()
    {
        
        var mockHttp = new MockHttpMessageHandler();
        mockHttp.When("http://localhost/pokemon/cards/search*").Respond("application/json", """{"data": [{"name": "Venusaur ex"}]}""");
        
        var client = mockHttp.ToHttpClient();
        client.BaseAddress = new Uri("http://localhost/");

        var service = new CardmarketService(client);
        JsonElement result = await service.SearchPokemonCards("");
        
        Assert.That(result.TryGetProperty("data", out var data),  Is.True);
        Assert.That(data.GetArrayLength(), Is.GreaterThan(0));
        Assert.That(data[0].GetProperty("name").GetString(), Is.EqualTo("Venusaur ex"));
    }
}