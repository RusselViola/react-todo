import React, { Component } from 'react';

export default class TodoSearch extends Component {

  render() {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
          </label>
        </div>
      </div>
    )
  }
}
