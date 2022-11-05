import React from "react";
import Columns from "./Columns";

function Table() {
  return (
    <div>
      <h1>table</h1>
      <table>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
