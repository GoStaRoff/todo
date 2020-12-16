import React from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import AddItemForm from "../add-item/add-item-form";

import "./app.css";

let count = 4;

export default class App extends React.Component {
  state = {
    todoData: [
      this.createTodoItem("Drink Cofee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch"),
    ],
    term: "",
    filter: "all", //all, active, done
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: count++,
    };
  }

  deleteItem(id) {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  }

  addItem(label) {
    this.setState(({ todoData }) => {
      const newArray = [...todoData, this.createTodoItem(label)];
      return {
        todoData: newArray,
      };
    });
  }

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex((el) => el.id === id);
    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  onSearchItem = (label) => {
    this.setState({
      term: label,
    });
  };

  onFilterChange = (filter) => {
    this.setState({
      filter: filter,
    });
  };

  searchItem = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(
      (el) => el.label.toLowerCase().indexOf(term.toLowerCase()) !== -1
    );
  };

  filterItem = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((el) => !el.done);
      case "done":
        return items.filter((el) => el.done);
      default:
        return items;
    }
  };

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.searchItem(todoData, term);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchItem={(label) => this.onSearchItem(label)} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>

        <TodoList
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
          onDeleted={(id) => this.deleteItem(id)}
          todos={this.filterItem(visibleItems, filter)}
        />
        <AddItemForm onAdded={(label) => this.addItem(label)} />
      </div>
    );
  }
}
