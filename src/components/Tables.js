import React from "react";

const Tables = (props) => {
   return (
      <div className="page">
         <h1>Tables</h1>

         <table className="table">
             <thead className="bordered">
                 <tr>
                     <th>Head1</th>
                     <th>Head2</th>
                     <th>Head3</th>
                     <th>Head4</th>
                 </tr>
             </thead>
             <tbody className="bordered">
                 <tr>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                 </tr>
                 <tr>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                     <td>4</td>
                 </tr>
             </tbody>
         </table>
      </div>
   );
};

export default Tables;
