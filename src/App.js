import "./App.css";
import Header from "./components/header/header";
import Column from "./components/columnChart/column";
import Pie from "./components/pieChart/pieChart";
import Progress from "./components/progressBar/progress";
import Table from "./components/table/table";
import sales1 from "./assets/sales1.jpeg";
import sales2 from "./assets/sales2.jpeg";
import sales3 from "./assets/sales3.jpeg";
import sales4 from "./assets/sales4.png";
import user from "./assets/user1.png";

function App() {
  const images = [
    { url: sales1 },
    { url: sales2 },
    { url: sales3 },
    { url: sales4 },
  ];
  return (
    <>
      <Header></Header>
      <div style={{ display: "flex" }}>
        <img
          src={sales4}
          style={{ width: "100%", opacity: "0.5", zIndex: "-1" }}
        ></img>
        <div class="carde">
          <img src={user} alt="Avatar" style={{ width: "50%" }} />
          <div class="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>National Sales Director</p>
            <hr></hr>
            <h4>
              <b>Company</b>
            </h4>
            <p>Microsoft</p>
            <hr></hr>
            <Progress></Progress>
          </div>
        </div>
      </div>

      <div className="twoCharts">
        <Column></Column>
        <Pie></Pie>
      </div>
      <div className="table">
        <h2 className="app-txt">APPOINTMENTS</h2>
        <Table></Table>
      </div>
    </>
  );
}

export default App;
