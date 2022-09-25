
import './App.css';
import Form from './components/Form';
import InlineCSS from './components/InlineCSS';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import Stylesheet from './components/Stylesheet';
import UserGreeting from './components/UserGreeting';


function App() {
  return (
    <div className="App">
      <Form />
      {/* <InlineCSS /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList />
      <ParentComponent />
      <UserGreeting /> */}
    </div>
  );
}

export default App;
