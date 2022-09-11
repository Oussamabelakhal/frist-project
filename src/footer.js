import React from "react";
import { ReactDOM, useState , useEffect } from "react";

import axios from "axios";


function Footer()
{
  const [links,setlinks] = useState([]);
  const [post , setposts] = useState([]);
  const [quets , setquets] = useState([]);

  useEffect(
    ()=>{
      axios.get(`https://www.breakingbadapi.com/api/quotes`).then( res=>{
        
        setquets(res.data)
        //console.log(res.data);
      })
      
    }
  )
  useEffect(
    ()=>{
      axios.get(`https://www.breakingbadapi.com/api/episodes`).then( res=>{
        
        setposts(res.data)
        //console.log(res.data);
      })
    }
  )

  useEffect(
    ()=>{
      axios.get(`https://www.breakingbadapi.com/api/characters`).then( res=>{
        
        setlinks(res.data)
      })
    }
  )
  return (
    <div className="footer container-fluid   ">
       
        <div className=" navbar-collapse container foo shadow-lg ">
          <ul className="navbar nav me-auto">
            <li className="nav-item">
              {
                 <a className="nav-link text-dark">
                   Characters : {links.length}
                 </a>
                 
              }
               </li>
               <li className="nav-item">
              {
                 <a className="nav-link text-dark">
                   Episodes : {post.length}
                 </a>
                 
              }
               </li>
               <li className="nav-item">
              {
                 <a className="nav-link text-dark">
                   Quotes : {quets.length}
                 </a>
                 
              }
               </li>
         
          </ul>
        </div>
    </div>
  )
}
export default Footer;