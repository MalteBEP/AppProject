namespace services;

public class ClientFactoryService 
{

    private readonly IHttpClientFactory clientFactory;
    private readonly IConfiguration config;

    public ClientFactoryService(IHttpClientFactory clientFactory, IConfiguration config){

        this.clientFactory = clientFactory;
        this.config = config;
    }
    
    public HttpClient CreateCardmarketClient() 
    {
        var client = clientFactory.CreateClient();
        client.DefaultRequestHeaders.Add("x-rapidapi-key", config["RAPIDAPI_KEY"]!);
        client.DefaultRequestHeaders.Add("x-rapidapi-host", "cardmarket-api-tcg.p.rapidapi.com");
        return client;
    }
}