import { Button, TextField } from "@mui/material";
import { data } from "autoprefixer";
import React from "react";
import { useForm } from "react-hook-form";
import IncrementDecrementCounter from "../homepage/IncrementDecrementCounter";


function Form(){
    const {
        register,
        handleSubmit,
        formState : { errors },
    }= useForm({
        defaultValues: {
          firstName: '',
          lastName: ''
        } 
    });
    const[dataResult, setDataResult] = React.useState();
    const onSubmit = (data)=>{
        console.log(data);
        setDataResult(data)

    };

     console.log("Hii",dataResult);
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
        
          </div>
         </form>
         <>
        <IncrementDecrementCounter   
        data={dataResult}
        />
      </>


        </div>
    );
}
export default Form;

