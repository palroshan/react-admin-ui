import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./BarChartBox.scss";

type Props = {
    title: string,
  color: string;
  dataKey: string;
  chartData: Object[];
};

function BarChartBox(props: Props) {
  return (
    <div className="barChartBox">
        <h1 className="title">{props.title}</h1>
      <ResponsiveContainer >
        <BarChart width={150} height={40} data={props.chartData}>
          <Bar dataKey={props.dataKey} fill={props.color} />
          <Tooltip
            contentStyle={{ backgroundColor: "#2a3447", borderRadius: "5px" }}
            labelStyle={{ display: "none" }}
            cursor={{fill:"none"}}
          />
        </BarChart>
      </ResponsiveContainer>{" "}
    </div>
  );
}

export default BarChartBox;
