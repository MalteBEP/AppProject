namespace interfaces;

public interface ICardmarketService
{
    Task<string> SearchPokemonCards(string name);
}