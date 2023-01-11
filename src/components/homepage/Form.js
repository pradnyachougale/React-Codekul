// eslint-disable-next-line no-unused-vars
import { Button, TextField } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import {data} from "autoprefixer";
import React from 'react'
import {useForm} from "react-hook-form";

function Form(){
    const {
        
        register,
        handleSubmit,
        watch,
        formState : { errors },
    } = useForm();

    let fname = watch("fname");
    let lname = watch("lname");
    console.log(fname);
    const onSubmit = (data) =>{
        console.log(data);

    }

    return(
        <div className="grid justify-center m-12">
         <form onSubmit ={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-2 m-5 mt-10 shadow rounded border p-5">
          <TextField label="First Name" name ="fname" {...register("fname")} ></TextField>
          <TextField label="Last Name" name ="lname" {...register("lname")} ></TextField>
        <TextField label="Mobile Number" ></TextField>
        <TextField label="Password"> </TextField>
        <TextField label="Address"></TextField>
        <TextField label="Pincode"> </TextField>
        <div className="col-span-3 flex justify-center">
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </div>
        <div>
          <p>
            {fname}
          </p>
          <p>
            {lname}
          </p>
        </div>
          </div>
         </form>

        </div>
    );
}
export default Form;

