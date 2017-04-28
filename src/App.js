import React, { Component } from 'react';
import './App.css';
import Slider from '../src/components/slider.js'
import logo from './logo.svg'

class TodoItem extends Component {  
  setClassName(status) {
    switch (status) {
      case 0:
        return "White";
      case 1:
      default:
        return "Green";
    }
  }
  render() {
    return (
      <div className="TodoItem {this.setClassName(this.props.data.status)}">
        <span>{this.props.data.heading} </span> &nbsp &nbsp
          <Slider value={this.props.data.status} onChange={() => this.props.onSliderChange()} />
      </div>
    );
  }
}

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { id: 1, heading: "item1", description:"item1 desc", status:0 },
        { id: 1, heading: "item2", description:"item1 desc", status:0 },
        { id: 1, heading: "item3", description:"item1 desc", status:1 },
        { id: 1, heading: "item4", description:"item1 desc", status:1 }
      ],
      activeFilteredItems: [],
      completedFileredItems: [],
      filter: {
        text: '',
        status: 'All'
      }
    };
    this.filterItems();
  }
  onSliderChange(id){    
    // do mutating operation here as we do not set the state.
    let changedItem = this.state.items.filter(item => item.id === id)    ;
    changedItem.status = !changedItem.status;
    // Now call filterItems that does the rendering.
    this.filterItems();      
  }
  filterItems() {
    let txtfilteredList = this.state.items;
    if (this.state.filter.text) {
      txtfilteredList = txtfilteredList.filter(function (item) {
        return item.toLowerCase().search(
          this.state.filter.text.toLowerCase()) !== -1;
      });
    }
    const activeFilteredList = txtfilteredList.filter(item => item.status === 0);
    const completedFilteredList = txtfilteredList.filter(item => item.status === 1);
    this.setState({ activeFilteredItems: activeFilteredList, completedFileredItems: completedFilteredList });
  }
  render() {
    return (
      <div className="TodoList">
        <div className="ActiveItems">Active
              <ul>
            {
              this.state.activeFilteredItems.map(function (item) {
                return <TodoItem data={item} onSliderChange={() => this.onSliderChange(item.id)}  />
              })
            }
          </ul>

        </div>
        <div className="CompletedItems">Completed
         <ul>
            {
              this.state.completedFileredItems.map(function (item) {
                return <TodoItem data={item} />
              })
            }
          </ul>
        </div>
      </div>
    );
  }

}

class App extends Component {
  constructor() {
    super();
    this.state = {
      checked: true
    };
  }
  sliderChanged() {
    this.setState({ checked: !this.state.checked })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Slider value={this.state.checked} onChange={() => this.sliderChanged()} />
        </p>
         <p className="App-intro">
          <TodoList />
        </p>
      </div>
    );
  }
}

export default App;
