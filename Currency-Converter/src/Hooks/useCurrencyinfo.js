import { useState, useEffect } from "react";

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchCurrency() {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json = await res.json();

        // json looks like: { "usd": { "inr": 83.1, "eur": 0.92, ... } }
        setData(json[currency]);
        console.log("currency data:", json[currency]);
      } catch (err) {
        console.error("Error fetching currency data:", err);
        setData({}); // reset on error
      }
    }

    fetchCurrency();
  }, [currency]);

  return data;
}
