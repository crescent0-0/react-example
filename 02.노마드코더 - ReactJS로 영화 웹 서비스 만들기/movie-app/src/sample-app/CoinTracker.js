import { useState, useEffect } from "react";

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [usd, setUsd] = useState(0);
    const [selectCoin, setSelectCoin] = useState(0);

    const onChangeCoin = (event) => setSelectCoin(event.target.value);  // 선택한 코인(옵션) 정보 저장
    const onChangeUSD = (event) => setUsd(event.target.value);  // 입력한 USD 정보 저장

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then(response => response.json())
            .then(data => {
                setCoins(data);
                setLoading(false);
            });
    }, [])
    
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong> :
                <div>
                    <select onChange={onChangeCoin}>  
                        {coins.map((coin,idx) => <option value={idx}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>)}
                    </select>
                    <br />
                    <input type="number" placeholder="USD" value={usd} onChange={onChangeUSD}></input> USD
                    <h3 style={{color:"blue"}}>{usd} USD ↔ { usd / coins[selectCoin].quotes.USD.price} {coins[selectCoin].symbol}</h3>
                </div>   
            }
        </div>
    )
}

export default CoinTracker