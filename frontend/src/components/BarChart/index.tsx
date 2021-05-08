import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Chart from "react-apexcharts";
import { saleSuccess } from "types/sale";
import { round } from "utils/format";
import { BASE_URL } from "utils/requests";

type SeriesData = {
  name: string;
  data: number[];
}

type ChartData = {
  labels: {
    categories: string[]
  };
  series: SeriesData[];
}

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: []
    },
    series: [
      {
        name: "% Sucesso",
        data: []
      }
    ]
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/success-by-seller`).then(response => {
      const data = response.data as saleSuccess[];
      const labels = data.map(item => item.sellerName);
      const series = data.map(item => round(100 * item.deals / item.visited, 1));

      setChartData({
        labels: {
          categories: labels
        },
        series: [
          {
            name: "% Sucesso",
            data: series
          }
        ]
      });
    });
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  };

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
}

export default BarChart;


