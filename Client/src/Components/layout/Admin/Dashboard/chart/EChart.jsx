import ReactApexChart from "react-apexcharts";
import eChart from "./configs/eChart";
import { Button } from "antd";

function EChart() {
    return (
        <>
            <div style={{ fontSize: 20, marginBottom: 10 }}>
                Thống kê đơn hàng
                <Button
                    style={{ height: 30, marginLeft: 20, alignItems: "center" }}
                    type={"text"}
                >
                    Print
                </Button>
            </div>

            <div id='chart'>
                <ReactApexChart
                    className='bar-chart'
                    options={eChart.options}
                    series={eChart.series}
                    type='bar'
                    height={420}
                />
            </div>
        </>
    );
}

export default EChart;
