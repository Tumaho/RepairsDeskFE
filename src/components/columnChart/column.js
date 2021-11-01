import { CanvasJSChart } from "canvasjs-react-charts";

function Column() {
  const options = {
    theme: "light2",
    title: {
      text: "SALES VS COGS",
    },
    data: [
      {
        type: "column",
        name: "06 Aug",
        showInLegend: true,
        dataPoints: [
          { label: "MON", y: 0.05 },
          { label: "TUE", y: 0.2 },
          { label: "WED", y: 1 },
          { label: "THU", y: 1.5 },
          { label: "FRI", y: 1 },
          { label: "SAT", y: 0.5 },
          { label: "SUN", y: 1.5 },
        ],
      },
      {
        type: "column",
        name: "08 Aug",
        showInLegend: true,
        dataPoints: [
          { label: "MON", y: 0.1 },
          { label: "TUE", y: 0.5 },
          { label: "WED", y: 0.9 },
          { label: "THU", y: 1.7 },
          { label: "FRI", y: 1.1 },
          { label: "SAT", y: 0.4 },
          { label: "SUN", y: 1.6 },
        ],
      },
      {
        type: "column",
        name: "10 Aug",
        showInLegend: true,
        dataPoints: [
          { label: "MON", y: 0.3 },
          { label: "TUE", y: 0.7 },
          { label: "WED", y: 0.2 },
          { label: "THU", y: 1 },
          { label: "FRI", y: 0.88 },
          { label: "SAT", y: 0.22 },
          { label: "SUN", y: 1.2 },
        ],
      },
    ],
  };
  return (
    <div style={{ paddingTop: "6%", width: "50%" }}>
      <CanvasJSChart
        options={options}
        /* onRef = {ref => this.chart = ref} */
      />
    </div>
  );
}

export default Column;
