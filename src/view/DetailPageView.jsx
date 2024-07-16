import millify from "millify";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";

const DetailPageView = ({ model }) => {
  // Örnek grafik verisi
  const örnekData = {
    labels: ["Jun", "Jul", "Aug"],
    datasets: [
      {
        id: 1,
        label: "Örnek Veri 1",
        data: [5, 6, 7],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        id: 2,
        label: "Örnek Veri 2",
        data: [3, 2, 1],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h3 className="text-center">
        <span className="me-3 fs-4 font-bold">{model.coin?.name}</span>
        <span className="fs-2 text-warning">{model.coin?.symbol}</span>
      </h3>

      <div className="row">
        <section className="col-md-3 d-flex flex-column gap-5 p-5 p-md-4">
          {model?.infoFields?.map((item, i) => (
            <div
              key={i}
              className="text-bg-light rounded shadow-lg text-center p-3"
            >
              <span className="fs-2">{item.icon}</span>
              <h4>{item.label}</h4>
              <p className="fw-bold">{millify(item.value)}</p>
            </div>
          ))}
        </section>
        <section className="col-md-9 p-5 p-md-4">
          {model.chartData ? (
            <>
              <Line data={model.chartData} />
              <Bar data={model.chartData} />
            </>
          ) : (
            <>
              <Line data={örnekData} />
              <Bar data={örnekData} />
              <p>Gerçek grafik verileri yükleniyor...</p>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default DetailPageView;
