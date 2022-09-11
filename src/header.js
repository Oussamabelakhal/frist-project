import React from "react";



function Header() 

{
  
        return (
          
          
             
            <nav className='navbar navbar-expand-sm '>
              <div class="container-fluid">
              <a href="" className=' h2 text-dark navbar-brand'>Breaking Bad </a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className='navbar-nav ms-auto  mb-2 mb-lg-0 al'>
                <li className='nav-item'> <a className='nav-link active ' href='#' > Home </a> </li>
                <li  className='nav-item'> <a className='nav-link '  href='#'> About us </a> </li>
                <li  className='nav-item'> <a className='nav-link '  href='#'> Contact Us</a> </li>
              </ul>
              </div>
              </div>
            </nav>
         
          
        )
      
    
}

export default Header;