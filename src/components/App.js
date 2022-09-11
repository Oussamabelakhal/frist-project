import React from 'react';



import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


import Cr   from './card';
import Header from '../header';
import Se from '../links';
import Lgend from '../logo';
//import Footer from '../footer';
//import Bo from '../api';



AOS.init();




class App extends React.Component 

{


  Header() {
    return (
      <div>
      <div className=' container-fluid'>

        <Header />
        </div>
        <div className='container-fluid hopp bg-dark'  >
        <Lgend />
       
        

      </div>
      </div>
    
    )
  }


  Content()
  {

    return(
      <div className='continer-fluid bg-white'>
        <div className='container '>

        <Cr/>
        </div>

          
          
      
                  </div>
      
  
  )
  }

  Sliad_bar()
  {
    return(
      
  
        <div className='container-fluid  mb-3 bg-dark'>
                      
                        
                      <Se />

                      </div>
    )
  }



 
}
 

export default App;
