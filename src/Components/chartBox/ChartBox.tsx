import { Link } from "react-router-dom";
import "./ChartBox.scss";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  number: number | string;
  dataKey: string;
  percentage: number;
  chartData: Object[];
};

function ChartBox(props:Props) {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer>
            <LineChart width={300} height={100} data={props.chartData}>
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text">
          <span
            className="percentage"
            style={{
              color: props.percentage < 0 ? "tomato" : "limegreen",
            }}
          >
            {props.percentage}%
          </span>
          <span className="duration">view all</span>
        </div>
      </div>
    </div>
  );
}

export default ChartBox;
