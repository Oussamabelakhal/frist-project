 import React, { Component } from 'react'

class App extends Component
{
        constructor()
        {
            super();
            this.state = {
                Number : 0
            }
            this.ClickHandler = this.ClickHandler.bind(this)
            
        }
        ClickHandler()
        {
            
            this.setState((prevstate)=>{
                    return{
                        Number:prevstate.Number+1
                    }
            })
        }
        render()
        {
            return(
                <div className='container'>
                <h1>{this.state.Number}</h1>
                <button onClick={this.ClickHandler} className='btn bg-dark text-white'>Click Me</button>
                </div>
            )
        }
}

export default App;