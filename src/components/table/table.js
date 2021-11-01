import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

function Table() {
  return (
    <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Ticket #</th>
            <th scope="col">Task</th>
            <th scope="col">Assign To</th>
            <th scope="col">Customer</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>IPhone 13 Pro</td>
            <td>Ahmad Khalil</td>
            <td>Will Smith</td>
            <td style={{color:'yellow'}}>In Progress</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>MacBook Pro 2020</td>
            <td>Jason Rayan</td>
            <td>Lionel Messi</td>
            <td style={{color:'yellow'}}>In Progress</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Samsung Note 20 Ultra</td>
            <td>Ali Hussain</td>
            <td>Eminem</td>
            <td style={{color:'green'}}>Delivered</td>
          </tr>
        </tbody>
      </table>
  );
}

export default Table;
