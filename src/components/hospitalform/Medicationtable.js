import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Checkbox } from "@mui/material";




export default function Medicationtable(props) {
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
              
              <span className="text-gray-600 font-semibold">Drug Type</span>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              
              <span className="text-gray-600 font-semibold">Drug Name</span>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              
              <span className="text-gray-600 font-semibold">Frequency</span>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              
              <span className="text-gray-600 font-semibold">Dosage</span>
            </TableCell>  
            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              
              <span className="text-gray-600 font-semibold">Instruction</span>
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
              
              <span className="text-gray-600 font-semibold">Quantity</span>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              
              <span className="text-gray-600 font-semibold">Route</span>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              
              <span className="text-gray-600 font-semibold">IV Flow Rate</span>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              
              <span className="text-gray-600 font-semibold">Start Date</span>
            </TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data6.result6 &&
            props.data6.result6.map((row, index) => {
              return (
          
                <TableRow key={index}>
                   <TableCell> </TableCell> 

                  <TableCell>{row.drug}</TableCell>
                  <TableCell>{row.drugname}</TableCell>
                  <TableCell>{row.freq}</TableCell>
                  
                  <TableCell>{row.dos}</TableCell>
                  
                  <TableCell>{row.ints}</TableCell>
                  
                  <TableCell>{row.duration}</TableCell>
                  
                  <TableCell>{row.qtity}</TableCell>
                  <TableCell>{row. Route}</TableCell>
                  <TableCell>{row.iv}</TableCell>
                  <TableCell>{row.sdate}</TableCell>
                  
                  
                  
                 

                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

