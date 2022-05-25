import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
    };
    this.postMethod = this.postMethod.bind(this);
  }
  // Declare a postMethod, which will increase the loop value, every time when we clicked on the post button,
  // it will create a new Item for that
  postMethod() {
    console.log("DENEMEEE");
    // document.getElementById("#postbtn").addEventListener("click", function () {
    //   console.log(document.getElementById("#toDo").value);
    // });
  }

  render() {
    const boxes = [];
    for (let i = 0; i < this.state.itemList.length; i++) {
      boxes.push(<Item post={this.postMethod}></Item>);
    }
    return <div>{boxes}</div>;
  }
}

class Item extends Component {
  constructor(props) {
    super(props);
    // We should bind these functions to this
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }
  post() {}

  render() {
    return (
      <div>
        <p>{document.getElementById("#toDo").value}</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("#root"));
