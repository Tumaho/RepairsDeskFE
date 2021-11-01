

function Progress() {
  return (
    <div style={{paddingTop: "10%", position:"absolute", right:"10%"}}>
        <h2>Store Profile</h2>
        <progress id="file" value="62" max="100"> 62% </progress> <br></br>
        <a href="" style={{color:'green'}}>Complete Your Profile</a>
      </div>
  );
}

export default Progress;
