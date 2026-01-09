import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./Hooks/useCurrencyinfo.js"; // make sure file name matches
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  // if currencyInfo is {}, Object.keys({}) = [], safe
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (!currencyInfo || !currencyInfo[to]) return; // safety
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1350463/pexels-photo-1350463.jpeg)",
        }}
      >
        <div className="w-full">
          {/* maxwmd -> max-w-md, border-gray-60 -> border-gray-600 */}
          <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  // ❌ earlier you were doing setAmount(amount)
                  onCurrencyChange={(currency) => setFrom(currency)}
                  // ❌ prop name was selectCurrency, but component expects selectedCurrency
                  selectedCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>

              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>

              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  // should be selectedCurrency and should use `to`
                  selectedCurrency={to}
                  // ❌ amountDisable -> correct prop is amountDisabled
                  amountDisabled={true}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
