import { useParams } from "react-router-dom";
import DetailPageView from "../view/DetailPageView";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DetailModel } from "../model/DetailModel";

const DetailPageController = () => {
  const params = useParams();
  const [coin, setCoin] = useState(null);
  const [history, setHistory] = useState([]);
  console.log(params.id);
  console.log(coin);

  useEffect(() => {
    // Coin detaylarını getirme
    const fetchCoinDetails = async () => {
      try {
        const coinResponse = await axios.get(`/assets/${params.id}`);
        setCoin(coinResponse.data.data);

        const historyResponse = await axios.get(`/assets/${params.id}/history?interval=d1`);
        setHistory(historyResponse.data.data);
      } catch (error) {
        console.error("Error fetching coin details:", error);
      }
    };

    fetchCoinDetails();
  }, [params.id]);

  const model = new DetailModel(coin, history);

  return <DetailPageView model={model} coin={coin} />;
};

export default DetailPageController;
