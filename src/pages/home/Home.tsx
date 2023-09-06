import BarChartBox from "../../Components/barChartBox/BarChartBox";
import BigChartBox from "../../Components/bigChartBox/BigChartBox";
import ChartBox from "../../Components/chartBox/ChartBox";
import PieChartBox from "../../Components/pieChartBox/PieChartBox";
import TobBox from "../../Components/tobbox/TobBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./Home.scss";
function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TobBox />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4"><PieChartBox/></div>
      <div className="box box5">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box7"><BigChartBox/></div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
}

export default Home;
