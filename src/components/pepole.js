import React,{useEffect,useState} from "react";
//import  ReactDOM  from 'react';
import axios from "axios";
//import Mod from "./modal";

import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';



function TeamsC() 
{
 
  

    

  const [ posts,  setPosts ] = useState([]);

    
      

    useEffect(()=>
    {
    
      
      axios.get(`https://breakingbadapi.com/api/characters?limit=60&offset=12`)
      .then(
        res =>  {
          //console.log(res.data);
          setPosts(res.data)
          
        }
      )
      .catch(
        err => {
          console.log(err);
        })
     
    
    }
   
  
    )


  
return(
  <div className="p-2">
     <Splide options={
      {
        perPage:4,
        arrows:true,
        pagination:false,
        drag:'free',
        gap:'4rem'
      }
     }>
  {
    posts.map(post => 
      (
       
      
       <SplideSlide>
 <div className="" data-aos="zoom-in-down" >
        <img src={post.img} style={{}}  className="img-fluid shadow rounded opl " alt="img"></img></div>
       </SplideSlide>
      
        


        )



    )
  
  } 
  </Splide>
  </div>
)
  
     
    
}

export default TeamsC;

