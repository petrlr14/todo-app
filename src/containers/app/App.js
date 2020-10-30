import { Component } from 'react';
import List from './../list';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tasks: [],
      id: 0,
    };
  }

  onChange = (e) => {
    const value = e.target.value;
    this.setState({ title: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { title, tasks, id } = this.state;
    const newTask = {
      id,
      title,
    };
    this.setState({
      tasks: [...tasks, newTask],
      title: '',
      id: id + 1,
    });
  };

  onDelete = (id) => {
    const newTasks = this.state.tasks.filter((task) => {
      return task.id !== id;
    });
    this.setState({
      tasks: newTasks,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="title">Titulo</label>
          <input id="title" value={this.state.title} onChange={this.onChange} />
          <button type="submit">Agregar</button>
        </form>
        <List tasks={this.state.tasks} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
