import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";




export default function Dignosistable(props) {
  console.log("table result is", props);
  return (
    
    <TableContainer component={Paper}>
      <Table size="small" stickyHeader area-aria-label="stick table">
        <TableHead>
          <TableRow>
    
          <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
            
              <span className="text-gray-600 font-semibold">Action</span>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              
              <span className="text-gray-600 font-semibold">ICD Code</span>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              
              <span className="text-gray-600 font-semibold">Duration</span>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              
              <span className="text-gray-600 font-semibold">Status</span>
            </TableCell>

            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              <span className="text-gray-600 font-semibold">Chronic/Non-Chronic</span>
            </TableCell>

           {/* <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
            <span className="text-gray-600 font-semibold">Confirm Password</span> */}
              {/* <span className="text-gray-600 font-semibold">Address</span> 
            </TableCell>  */}
            {/* <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              <span className="text-gray-600 font-semibold">Address</span>
              <span className="text-gray-600 font-semibold">PinCode</span>
            </TableCell> */}
            {/* <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              <span className="text-gray-600 font-semibold">PinCode</span>
              
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              <span className="text-gray-600 font-semibold">Status</span>
              
            </TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data3.result3 &&
            props.data3.result3.map((row, index) => {
              return (
                <TableRow key={index}>
                  <TableCell> <Checkbox ></Checkbox></TableCell>

                  <TableCell>{row.icdcode}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  {/* <TableCell>{row.email}</TableCell> */}

                  <TableCell>{row.chronic}</TableCell>
                  {/* <TableCell>{row.confirmPassword}</TableCell> */}

                  
                 

                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

