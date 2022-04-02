import React from "react"
import LocationIcon from "../images/LocationIcon.png"

export default function Place(props) {
    return(
        <div>
        <div className="flex">
            <img src={'../images/${props.image}'} className="object-fill h-48 w-96 my-6 ml-3 rounded-xl"  />
            
            <div className="space-x-1 align-top mt-7">
            <img className="w-5 h-5 relative" src={LocationIcon} />
            <div className="space-x-8">    
                <span className="font-normal text-gray-500 relative">{props.Country}</span>
                     <span className="text-gray-300 underline"> View on Google Maps</span>
                     </div>
                     <h1 className="font-bold text-5xl ">{props.location}</h1>
             <p>{props.date}</p>
             <p className="p-3"> {props.description}</p>
             </div>
             </div>
            </div>
                 
         
            
           
    
    
    )
}