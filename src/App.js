import React from'react'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      date: new Date()
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Realtime Clock</h1>
        <hr></hr>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  
}

export default App;
