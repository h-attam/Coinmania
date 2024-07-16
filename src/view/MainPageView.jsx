import React from "react";
import { MdCurrencyBitcoin } from "react-icons/md";
import CardView from "./CardView";
import millify from "millify";
import LoadMoreController from "../controller/LoadMoreController";

const MainPageView = ({ popular, coins,navigate }) => {
 

  return (
    <div className="container-xl mt-5">
      <h3 className="d-flex align-items-center gap-2">
        <p>
          <MdCurrencyBitcoin />
        </p>
        <p>Bitcoin'in Yükselişi</p>
      </h3>
      <p>
        Bitcoin, kripto para dünyasında büyük bir çıkış yakaladı. Son birkaç
        haftada değeri hızla arttı ve birçok yatırımcı tarafından ilgiyle takip
        ediliyor. Peki, bu yükseliş ne anlama geliyor?
      </p>
      {/* popülerleri listele */}
      <div className="d-flex justify-content-around">
        {popular?.map((i) => (
          <CardView key={i.id} data={i} />
        ))}
      </div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Fiyat</th>
            <th>Market Hacmi</th>
            <th>Değişim</th>
            <th>% Değişim (24s) </th>
          </tr>
        </thead>
        <tbody>
          {coins ? (
            coins.map((coin, index) => (
              <tr key={`${coin.id}-${index}`} onClick={()=> navigate(`/coin/${coin.id}`) } >
                <td>{index + 1}</td>
                <td>
                  <span className="text-warning text-nowrap fw-bold me-2">
                    {coin.symbol}
                  </span>
                  <span>{coin.name}</span>
                </td>
                <td>${millify(coin.priceUsd)}</td>
                <td>{millify(coin.marketCapUsd)}</td>
                <td>{millify(coin.volumeUsd24Hr)}</td>
                <td
                  className={
                    Number(coin.changePercent24Hr) >= 0
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {millify(Number(coin.changePercent24Hr).toFixed(2))}
                </td>
              </tr>
            ))
          ) : (
            <p>Yükleniyor</p>
          )}
        </tbody>
      </table>
      <LoadMoreController />
    </div>
  );
};

export default MainPageView;
