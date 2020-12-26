// named export din libraria react
import { Component } from 'react';
import './App.css';
import MobileApp from './components/MobileApp';
import DesktopApp from './components/DesktopApp';

// useState, useEffect
// functional Components vs class Components
// stateless vs stateful
// javascript vs java

// useEffect use cases:
/**
 * obtinerea de date +- -> la aparitia componentei pe ecran -> useEffect(() => {}, [])
 * window / document - effecte / side effecte
 * inregistrarea la listenuri - window.addEventListener('scroll', () => {});
 */

// useEffect(() => {
  // window.addEventListener('resize', () => {
  //   if (window.innerWidth < 500) {
  //     this.setState({ ...this.state, isMobile: true });
  //   } else {
  //     this.setState({ ...this.state, isMobile: false });
  //   }
  // });

//   return () => {
//    window.removeEventListener('resize', () => {});
//  }
// }, [])

const initialState = {
  name: 'Vlad',
  age: 90,
  gender: 'M',
};
class App extends Component {
  constructor() {
    super();
    // imutabilitati
    this.state = { ...initialState };
  }

  // component lifecycle methods
  componentDidMount = () => {
    // expensive
    window.addEventListener('resize', () => {
      if (window.innerWidth < 500) {
        this.setState({ ...this.state, isMobile: true });
      } else {
        this.setState({ ...this.state, isMobile: false });
      }
    });
  };
  // memory leak
  componentWillUnmount() {
    // multi-thread - java
    // single-thread - javascript (event loop)
    window.removeEventListener('resize', () => {});

    // cat timp ati petrecut , daca ati interactionat , daca v-a placut
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      name: 'Vladimir',
      age: 30,
    });
  };

  handleReset = () => {
    this.setState({
      ...initialState,
    });
  };

  render() {
    return (
      <div className="App">
        <p>Hello {this.state.name}</p>
        <p>My Age is {this.state.age}</p>
        <button onClick={this.handleClick}>Click me</button>
        <button onClick={this.handleReset}>Reset</button>
        {this.state.isMobile ? <MobileApp /> : <DesktopApp />}
      </div>
    );
  }
}

export default App;
