import ReactApexChart from "react-apexcharts";
import eChart from "./configs/eChart";

function EChart() {
  return (
    <>
      <div style={{ fontSize: 20, marginBottom: 10 }}>Thống kê đơn hàng</div>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={eChart.options}
          series={eChart.series}
          type="bar"
          height={420}
        />
      </div>
    </>
  );
}

export default EChart;
