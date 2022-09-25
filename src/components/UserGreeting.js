import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
    // short circuit
    return this.state.isLoggedIn && <h1>Welcome Sahil</h1>


    // ternary
    // return(
    //     this.state.isLoggedIn ? (
    //     <h1>Welcome Sahil</h1> 
    //     ) : (
    //     <h1>Welcome Guest</h1>
    // ) )


    //element variable
    // let message    
    // if(this.state.isLoggedIn) {
    //     message = <h1>Welcome Sahil</h1>
    // } else {
    //     message = <h1>Welcome Guest</h1>
    // }
    // return <div>{message}</div>

        //if-else
    // if(this.state.isLoggedIn) {
    //     return <h1>Welcome Sahil</h1>
    // } else {
    //     return <h1>Welcome Guest</h1>
    // }



    // return (
    //     <div>
    //         <h1>Welcome Sahil</h1>
    //         <h1>Welcome Guest</h1>
    //     </div>
    // )
  }
}

export default UserGreeting