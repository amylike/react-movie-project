import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);

  const getCoinInfo = (event) => {
    const coinIndex = event.target.value;
    setSelectedCoin(coins[coinIndex]);
  };
  const onSubmit = (event) => {
    if (selectedCoin && inputValue) {
      const price = selectedCoin.quotes.USD.price;
      setResult(inputValue / price);
    }
    event.preventDefault();
  };
  const getInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={getCoinInfo} required>
          <option value="">Select a coin</option>
          {coins.map((coin, index) => (
            <option key={coin.id} value={index}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <form onSubmit={onSubmit}>
        <input
          type="number"
          value={inputValue}
          onChange={getInputChange}
          placeholder="how much you have"
          required
        />
      </form>
      <div>you can get {Math.round(result)} coins</div>
    </div>
  );
}

export default App;
