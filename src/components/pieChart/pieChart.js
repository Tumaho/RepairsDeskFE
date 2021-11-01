import {CanvasJSChart} from 'canvasjs-react-charts';

function Pie() {
  const options = {
    title: {
      text: "HOW DID YOU HEAR ABOUT US?"
    },
    data: [{				
              type: "pie",
              showInLegend: true,
              legendText: "{indexLabel}",
              dataPoints: [
                { y: 45, indexLabel: "Facebook" },
				{ y: 10, indexLabel: "Google Ads" },
				{ y: 20, indexLabel: "Newspaper" },
				{ y: 25, indexLabel: "Social Media"}
              ]
     }]
 }
  return (
    <div style={{paddingTop: "6%", width: "50%"}}>
        <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
      </div>
  );
}

export default Pie;
