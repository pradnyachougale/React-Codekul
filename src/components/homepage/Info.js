import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import "../../App.css";
import { getValue } from "@testing-library/user-event/dist/utils";
import laptop from "../assets/laptop.jpg";
import laptop1 from "../assets/laptop1.jpg";
import network from "../assets/network.jpg";


const data = {
    result: [
        {
            id: 1,
            img: laptop,
            name: "codekul",
            skills: ["JavaScript", "HTML", "Css", "AngularJS", "ReactJS"],
            phone: 12345,
            email: "abc@gmail.com",
            address: "Kothrud Depot,pune",
        },
        {
            id: 2,
            img: network,
            name: "codekul",
            skills: ["JavaScript", "HTML", "Css", "AngularJS", "ReactJS"],
            phone: 67890,
            email: "bkc@gmail.com",
            address: "Kothrud Depot,pune",
        },
        {
            id: 3,
            img: laptop1,
            name: "codekul",
            skills: ["JavaScript", "HTML", "Css", "AngularJS", "ReactJS"],
            phone: 19876,
            email: "ccd@gmail.com",
            address: "Kothrud Depot,pune",
        },
        {
            id: 4,
            img: network,
            name: "codekul",
            skills: ["JavaScript", "HTML", "Css", "AngularJS", "ReactJS"],
            phone: 154321,
            email: "akkb@gmail.com",
            address: "Kothrud Depot,pune",
        },
    ],
};


console.log(JSON.stringify(data.result));

export default function Info() {
    const [dataresult, setDataResult] = React.useState(data);
    console.log(dataresult);
    const [visible, setVisible] = React.useState(false);

    const showContent = () => {
        setVisible(!visible);
    }

    const [info1, showInfo] = React.useState(false);

    const showInformation = () => {
        showInfo(true);
    }

    return (
        <div>
            <div>
                <button className="bg-green-800 p-2 m-10 text-white rounded " onClick={() => {
                    showContent();
                }
                }>
                    set visible
                </button>
            </div>


            {visible ? (
                <div className="grid grid-cols-4 mt-12 m-5 gap-2">
                    {
                        data.result.map((data) => (
                            <div className="border p-2 shadow-xl rounded">
                                <div className="border flex justify-center">
                                    <img src={data.img} alt="" />
                                </div>
                                <div className="flex space-x-2 font-semibold border-black border-b-2 p-2">
                                    <label>Name &nbsp; :</label>
                                    <p>{data.name}</p>
                                </div>
                                <div className="flex space-x-2 font-semibold  border-black border-b-2 p-2">
                                    <label>Skills : &nbsp; </label>
                                    <h1>{data.skills}</h1>
                                </div>
                                <div className="w-8 h-8 float-right mt-5">
                                    <button onClick={() => {
                                        showInformation();
                                    }
                                    }><img src={laptop} alt="" /></button>
                                </div>
                            </div>

                        )


                        )
                    }


                </div>
            ) : (<div>
                <h1>Hello codekul</h1>
            </div>)
            }

            {info1 ? (
                <div className="grid grid-cols-4 -mt-2 m-5 gap-2">
                    {data.result.map((data) => (
                        <div className="border p-2 shadow-xl rounded">
                            <div className="flex space-x-2 font-semibold  border-black border-b-2 p-2">
                                <label>Phone &nbsp; :</label>
                                <p>{data.phone}</p>
                            </div>
                            <div className="flex space-x-2 font-semibold  border-black border-b-2 p-2">
                                <label>Email &nbsp; :</label>
                                <p>{data.email}</p>
                            </div>
                            <div className="flex space-x-2 font-semibold">
                                <label>Address &nbsp; :</label>
                                <p>{data.address}</p>
                            </div>
                        </div>

                    ))}
                </div>
            ) : (
                null
            )
            }






        </div>


    );


}









