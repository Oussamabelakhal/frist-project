import React, { Component, useEffect, useState, useTransition } from "react";


 function Bo() {
    const [data,setData] = useState([]);

 async function Bo_d()

{
    const url =`https://breakingbadapi.com/api/characters `;
    const reponse = await fetch(url);
    const data = await reponse.json();

    setData(data);
    
    
    data.map((item)=>{
            console.log(item);
    })

}
    return(
        /*
        <div className='col-md-4 crads-t py-2'>
            
        <div className='card '>
        <img className='card-img-top' src='img/i-1.jpg'/>
       
        <div className ='card-body'>
            <h5 className='card-title'>Title</h5>
            <p className='card-text'>
            Now with Better Call Saul Data! Check out the documentation. New! Try out the information playground here!
            </p>
          </div>
          
      </div>
      </div>
      */
     <button className="btn bg-dark text-white" onClick={Bo_d}>DAta</button>
    )

}

export default Bo;