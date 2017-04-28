import React, { Component } from 'react';
import './App.css';
import Slider from '../src/components/slider.js'
import logo from './logo.svg'

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      heading: 'Item 1',
      description: 'Item 1 Desc',
      status: 0
    };
  }
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
        <span>{this.props.data.heading} &nbsp; </span> &nbsp &nbsp
          <Slider value={this.props.data.status}  />
      </div>
    );
  }
}

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      activeFilteredItems: [],
      completedFileredItems: [],
      filter: {
        text: '',
        status: 'All'
      }
    };
  }
  filterItems() {
    const txtfilteredList = this.state.initialItems;
    if (this.state.filter.text) {
      txtfilteredList = txtfilteredList.filter(function (item) {
        return item.toLowerCase().search(
          this.state.filter.text.toLowerCase()) !== -1;
      });
    }
    const activeFilteredList = txtfilteredList.filter(item => item.status == 0);
    const completedFilteredList = txtfilteredList.filter(item => item.status == 1);
    this.setState({ activeFilteredItems: activeFilteredList, completedFileredItems: completedFilteredList });
  }
  render() {
    return (
      <div className="TodoList">
        <div className="ActiveItems">Active
              <ul>
          {
            this.state.activeFilteredItems.map(function(item) {
              return <TodoItem data={item} />
            })
          }
      </ul>

        </div>
        <div className="CompletedItems">Completed
   <ul>
          {
            this.state.completedFileredItems.map(function(item) {
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
      </div>
    );
  }
}

export default App;