import { Component } from 'react';
import List from './../list';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    const value = e.target.value;
    this.setState({ title: value });
  };

  render() {
    return (
      <div>
        <form>
          <dl>
            <dt>
              <label htmlFor="title">Titulo</label>
            </dt>
            <dt>
              <input
                id="title"
                value={this.state.title}
                onChange={this.onChange}
              />
            </dt>
          </dl>
          <button type="submit">Agregar</button>
        </form>
        <List />
      </div>
    );
  }
}

export default App;
