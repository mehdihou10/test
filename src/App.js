import logo from './logo.svg';
import './App.css';

function App() {

  console.log(process.env.REACT_APP_VA)
  return (
    <div className="App">
      <p>hello {process.env.REACT_APP_VA}</p>
      <p>my age is {process.env.AGE}</p>
    </div>
  );
}

export default App;
