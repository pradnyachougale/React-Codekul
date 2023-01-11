import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import * as yup from "yup";

import { FormControl, FormHelperText, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

export default function Loginmodal(props) {
    // const validationSchema = yup.object().shape({
    //     password: yup.string().required("Required"),
    //     email: yup.string().email().required("Required"),});

        const schema = yup.object().shape({
            email: yup.string().email().required("must be a email"),
            password: yup.string().min(8).max(16).required("password should not be empty"),
          });

          const defaultValues = {
            email: "",
            password: "",
          };

          const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
          } = useForm({
            defaultValues: {
              email: "",
              password: "",
        
            },
            // resolver: yupResolver(validationSchema),
            mode: "onChange",
            resolver: yupResolver(schema),
            defaultValues,
          });
       
          const onSubmit = (dataObj) => {
            console.log(dataObj);
            reset()
            props.setLoginData(dataObj)
            reset();
          };


  return (
    <div>
      <Modal 
         aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}>
        <Fade in={props.open}>
        <Box sx={style}>
        <form onSubmit={handleSubmit(onSubmit)} >
        <div className="grid gap-2">
                 <FormControl fullWidth sx={{ overFlowX: "hidden" }}>
                  <TextField
                    type="email"
                    name="email"
                    size="small"
                    label="Email"
                    // {...register("email")}
                  />
                  <FormHelperText
                    style={{ color: "#d32f2f" }}
                    className="capitalize"
                  >
                    {errors.email?.message}
                  </FormHelperText>
                  </FormControl>

                  <FormControl fullWidth sx={{ overFlowX: "hidden" }}>
                  <TextField
                    type="password"
                    name="password"
                    size="small"
                    label="Password"
                  />
                  {/* {...register("password")} */}
                  <FormHelperText
                    style={{ color: "#d32f2f" }}
                    className="capitalize"
                  >
                    {errors.password?.message}
                  </FormHelperText>
                </FormControl>
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded p-2 "
                   onClick={ props.onSubmit}
                >
                  Login
                </button>
        </div>

        </form>

        </Box>

        </Fade>

      </Modal>
    </div>
  )
}
