import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { object } from "yup";

export default function Commontable(props) {
    console.log("table result is", props);
    const [editAction, setEditAction] = React.useState(true);
    const [deleteAction, setDeleteAction] = React.useState(true);
    const removeHeaders = (headers, fieldToRemove) => {
      return headers.filter((v) => {
        return !fieldToRemove.includes(v);
      });
    };
    // set rows object to table
    const allHeaders = Object.keys(props.data.result[0]);
    const headers = removeHeaders(allHeaders, ["Id"]);
    React.useEffect(() => {
      props.data.actions.forEach((action) => {
        if (action === "Edit") {
          setEditAction(true);
        }
        if (action === "Delete") {
          setDeleteAction(true);
        }
      });
    }, []);
  console.log(headers);

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
                            <span className="text-gray-600 font-semibold">First Name</span>
                        </TableCell>
                        <TableCell
                            component="th"
                            scope="row"
                            style={{ background: "#f1f1f1" }}
                        >
                            <span className="text-gray-600 font-semibold">Last Name</span>
                        </TableCell>
                        <TableCell
                            component="th"
                            scope="row"
                            style={{ background: "#f1f1f1" }}
                        >
                            <span className="text-gray-600 font-semibold">Mobile Number</span>
                        </TableCell>

                        <TableCell
                            component="th"
                            scope="row"
                            style={{ background: "#f1f1f1" }}
                        >
                            <span className="text-gray-600 font-semibold">Password</span>
                        </TableCell>

                        <TableCell
                            component="th"
                            scope="row"
                            style={{ background: "#f1f1f1" }}
                        >
                            <span className="text-gray-600 font-semibold">Address</span>
                        </TableCell>
                        <TableCell
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
                        </TableCell>
                    </TableRow>
                    <TableRow className="bg-gray-300" >
                        <TableCell style={{ backgroundColor: "lightgray" }}>Actions</TableCell>
                        {headers.map((header, index) => (
                            <TableCell style={{ backgroundColor: "lightgray" }} key={index}>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>

                    {props.data.result &&
                        props.data.result.map((row, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell></TableCell>
                                    {props.data.actions.length > 0 ? (
                                        <TableCell>
                                            <div className="flex space-x-2">

                                                <TableCell>{row.firstName}</TableCell>
                                                <TableCell>{row.lastName}</TableCell>
                                                <TableCell>{row.mobileNumber}</TableCell>
                                                <TableCell>{row.password}</TableCell>
                                                <TableCell>{row.address}</TableCell>
                                                <TableCell>{row.pinCode}</TableCell>
                                                <TableCell>{row.status}</TableCell>
                                                <div>{editAction ? <span className="text-blue-700">Edit</span> : null}</div>
                                                <div>{deleteAction ? <span className="text-red-700">Delete</span> : null}</div>
                                            </div>

                                        </TableCell>
                                    ) : null}
                                    {headers && headers.map((header, i) => (
                                        <TableCell>
                                            {row[header]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            );
                        })}


                </TableBody>
            </Table>


        </TableContainer>
    );



}
