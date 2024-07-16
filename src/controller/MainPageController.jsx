import { useEffect, useState } from "react";
import MainPageView from "../view/MainPageView";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const MainPageController = () => {
  const [coins, setCoins] = useState([]);
  const [popular, setPopular] = useState(null);
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const page = params.get("page");

  useEffect(() => {
    axios
      .get(`/assets?limit=15&offset=${page ? page : 1}`)
      .then((res) => {
        setCoins(coins.concat(res.data.data));
        if (!popular) {
          setPopular(res.data.data.slice(0, 3));
        }
      })
      .catch((err) => console.log(err));
  }, [params]);

  return <MainPageView popular={popular} coins={coins} navigate={navigate} />;
};

export default MainPageController;