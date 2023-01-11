import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { useForm } from "react-hook-form";
import Commontable from "../tablestructure/Commontable";
import Mainmodal from "../tablestructure/Mainmodal";

const  loginData = {
    massage: "Login List",
    result: [
      {
        Id: 1,
        firstName: "John",
        lastName: "doe",
        mobileNumber: "123456",
        address: "codeKul,pune",
        pinCode: "424210",
        password: "2345",
      }
    ],
    statusCode: "200",
    actions: ["Edit", "Delete"],
};
function Main() {
    const [data, setData] = React.useState({ actions: [], result: [] });
    const [dataResult, setDataResult] = React.useState([]);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        // setDataResult(data);
        setData(loginData);
        setDataResult(loginData.result);
      }, []);
      
  console.log("data Result is",dataResult);
  console.log("data Result is", dataResult);

  return (
    <div className="mt-12 grid justify-center">
     <Button onClick={handleOpen}>Open modal</Button>

           <>{data.result.length > 0 ? <Commontable data={dataResult} /> : null}</>

           
      <>
        {data.result.length > 0 ? (
          <Commontable
            data={data}
            dataResult={dataResult}
            setDataResult={setDataResult}
          />
        ) : null}
      </>

      <Mainmodal
        open={open}
        handleClose={handleClose}
        data={dataResult}
        setDataResult={setDataResult}
        // data= {data}
        setData={setData}
      />

    </div>


  );

}

export default Main;