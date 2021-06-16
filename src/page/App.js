import logo from './../logo.svg';
import './../App.css';
import PageHeader from './../components/PageHeader';
import PageFooter from './../components/PageFooter';

function App() {
  return (
    <div className="App">
      <PageHeader/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PageFooter/>
    </div>
  );
}

export default App;
