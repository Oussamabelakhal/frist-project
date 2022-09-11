

import React, { useEffect, useState } from "react";

//import { ReactDOM } from "react";

import axios from 'axios';

function Cr()
 {
  
  
   
        const [ posts,setPosts ] = useState([]);


        useEffect(() => {
          
          
          axios.get(`https://breakingbadapi.com/api/characters?limit=12&offset=0`)
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
         
        
        })

        
        return (
         

          <div className=" o">
            <div className="h">
              
            <h3 className="h3 hop ">  <span className="span"></span> TEAMS OF SEIRE  </h3>
                </div>
         
          <div className="row bob">
            
            {
               
            posts.map(post => 
              (      
                
              <div className="col-lg-3  col-md-4 col-sm-6 py-5">        
            <div className="card  shadow  text-dark" data-aos="zoom-in">
            <img src={post.img} className="card-img-top"  style={{width:"100%"}} alt="img" />
            <div className="card-body ">
              <h5 className="card-title">{post.name}</h5>
              <p className="card-text pb-5 ">{post.nickname}</p>
            </div>
            
              </div>
           
           
            </div>
            
            ))
            }
</div>
 </div>
        )

        
       
    
    
    
}

export default Cr;