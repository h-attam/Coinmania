import { useSearchParams } from "react-router-dom";
import LoadMoreView from "../view/LoadMoreView";

const LoadMoreController = () => {
  const [params, setParams] = useSearchParams();

  const handleClick = () => {
    //* Güncel sayfa sayısını al
    const pageNumber = params.get("page") || 1;
    
    //* URL'i güncelle
    setParams({ page: Number(pageNumber) + 1 });
  };

  return <LoadMoreView handleClick={handleClick} />;
};

export default LoadMoreController;