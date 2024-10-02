import { useState, useEffect } from "react";

interface CoinData {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
  holdings: string;
}

const useCoinData = () => {
  const [coinData, setCoinData] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(
          "https://api.coincap.io/v2/assets?limit=10"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const formatedData = data.data.map((v: CoinData) => ({
          ...v,
          holdings: Math.floor(Math.random() * 10) + 1,
        }));
        setCoinData(formatedData);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCoinData();
  }, []);

  return { coinData, loading, error };
};

export default useCoinData;
