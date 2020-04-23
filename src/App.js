import React from "react";
import ListItems from "./ListItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      message: "You're all set up !",
      currentItem: {
        text: "",
        key: "",
      },
    };

    // Bind to the constructor.
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        message: "",
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    console.log(this.state.items.length);
    let msg = "";
    if (this.state.items.length < 2) {
      msg = "You're all set up !";
    }
    this.setState({
      message: msg,
      items: filteredItems,
    });
  };

  setUpdate(text, key) {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        console.log(item.key + "    " + key);
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="hello">
            Hello <br /> Arjun !
          </div>
          <div className="taskCountMessage">
            You have{" "}
            <span className="taskCount">
              {this.state.items.length} new task
            </span>{" "}
            today{" "}
          </div>
        </header>
        <section>
          <div className="listing">
            <div className="todo-title">Todo</div>
            <p class="message">{this.state.message}</p>
            <p>{this.state.items.text}</p>
            <ListItems
              items={this.state.items}
              deleteItem={this.deleteItem}
              setUpdate={this.setUpdate}
            />
          </div>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Add new task"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default App;
