import React, { useState } from 'react';
function Ap()
{
    const [ex,setex] = useState(0);

    function cont() 
    {
        setex(ex + 1);
    }
    return(
        <div className='continer'>
            <button className='btn btn-primary text-dark' onClick={cont}>
                CONT
            </button>
            <h1 className='h1 m-4'>
                {ex}
            </h1>
        </div>
    );
    
}


export default Ap;