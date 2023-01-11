import React from 'react'
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

import { useForm } from "react-hook-form";
import Tableformodal from "../modal/Tableformodal";
import Modalpage from "../modal/Modalpage";


const data = {
    result: [
      {
        id: 1,
        firstName: "John",
        lastName: "doe",
        mobileNumber: "123456",
        address: "codeKul,pune",
        pinCode: "424210",
        password: "2345",
        status: "Active"
      },
    ],
  };
  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

 function Mainpage() {
    const [dataResult, setDataResult] = React.useState([]);

    // //open and close modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    React.useEffect(() => {
        setDataResult(data);
      }, []);
      console.log("data Result is",dataResult);
  return (
      <div className="mt-12 grid justify-center">
          <Button onClick={handleOpen}>Open modal</Button>
          <>{data.result.length > 0 ? <Tableformodal data={dataResult} /> : null}</>
          
          
      <Modalpage
        open={open}
        handleClose={handleClose}
        data={dataResult}
        setDataResult={setDataResult}
      />
    </div>
  )
}
export default Mainpage;
