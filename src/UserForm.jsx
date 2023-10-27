import React, {Component} from "react"

class UserForm extends Component {
    handleSubmit = () => {
      console.log("Input Value is: ", this.input.value)
    }
    render () {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            ref={(input) => this.input = input} />
          <button type='submit'>Submit</button>
        </form>
      )
    }
  }

  export default UserForm









//   import logo from './logo.svg';
// import './App.css';
// import React,{ useState, useEffect } from 'react';

// function App() {

//   const [count, setCount] = useState(window.screen.width)

//   const currentScreenWidth = () => {
//     setCount(() => window.innerWidth)
//   }

//   useEffect(() => {
//   window.addEventListener('resize', currentScreenWidth)
//   })

//   return (
//     <div className="App">
//       <h2>The Size of The Window is <span>{count}</span> </h2>
//     </div>
//   );
// }

// export default App;
