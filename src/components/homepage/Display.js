import React from  "react";
import  "../../App.css";

const data = {
    result : [
        {
            id: 1,
            name : "Prashant Wagh",
            address: "Kolhapur",
        },
        {
            id: 2,
            name : "Swapnali Patil",
            address: "Pune",
        },
        {
            id: 3,
            name : "Satish Mane",
            address: "Kolhapur",
        },
        {
            id: 4,
            name : "Radha Bhandari",
            address: "Pune",
        },
        {
            id: 5,
            name : "Asawari Naik",
            address: "Jalgaon",
        },
        {
            id: 6,
            name : "Pooja Patil",
            address: "Mumbai",
        },
        {
            id: 7,
            name : "Swapnali Patil",
            address: "Pune",
        },

    ],
};




console.log(JSON.stringify(data.result));
export default function Display(){
    return(  
           
         <div>
         {
            data.result.map((data) => (
             <div><label>Address &nbsp; :</label>
            {data.address}
            <p>Name:  {data.name}</p></div>
    

            ))}
      </div>

      );
}