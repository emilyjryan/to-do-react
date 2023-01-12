import {Component} from 'react'
import './index.css'
import ListItem from './ListItem'

export default class MyList extends Component {

  state = {
    taskArray: this.props.theList,
    newItem: []

  }  

  clearList = () => {
    console.log('clearing the list')
    this.setState({
      taskArray: []
    })
  }

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault()
    this.setState(prevState => {
      return {
        taskArray: [...prevState.taskArray, prevState.newItem],
        newItem: ''
      }
    })
  }

  render() {

    let todoItems = this.state.taskArray.map((item, index) => {
      return <ListItem task={item} key={index} />
    })

    return (
      <>
        <h1>Things I should stop procrastinating:</h1>
        <form onSubmit={this.addItem}>
          <input type="text" placeholder="Type an item here" onChange={this.handleChange} value={this.state.newItem}/>
          <button type="submit">Add it!</button>
        </form>
        <ul>
          {todoItems}
        </ul>
        <button onClick={this.clearList}>Clear List</button>
      </>
    )
  }
}
