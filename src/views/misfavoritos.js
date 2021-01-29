import {Misfavoritos} from "../components/misfavoritos"
import React from "react";
import { Blog } from "../components/blog";


export const Favoritos =()=>{
   
    
    return(
        <div className="favoritos h-100" style={{margin:"2%"}}>
           <Misfavoritos/>
           <Blog/>
        </div>

    )
}