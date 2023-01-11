
// import { data } from "autoprefixer";
import { Button } from "@mui/material";
import React from "react";


export default function Tableform({ handleChange, formInputData, handleSubmit ,handleOpen}) {
  return (
    <div >
      <div className="grid justify-center m-12">
      <Button onClick={handleOpen}>LogIn Here</Button>
        <div className="grid grid-cols-3 gap-2 m-5 mt-10 shadow rounded border p-5">
        <div>
          <input type="text" onChange={handleChange} value={formInputData.fName} name="fName" className="form-control" placeholder="First Name" />

          <input type="text" onChange={handleChange} value={formInputData.lName} name="lName" className="form-control" placeholder="Last Name" />

          <input type="number" onChange={handleChange} value={formInputData.mobileno} name="mobileno" className="form-control" placeholder="Mobile No" />
        </div>
        <div>
          <input type="password" onChange={handleChange} value={formInputData.password} name="password" className="form-control" placeholder="Password" />

          <input type="text" onChange={handleChange} value={formInputData.address} name="address" className="form-control" placeholder="Address" />

          <input type="text" onChange={handleChange} value={formInputData.pincode} name="pincode" className="form-control" placeholder="Pincode" />
        </div>
        </div>
      </div>

      <div className="col-span-3 flex justify-center">
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>


  )
}

