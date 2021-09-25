
import './App.css';
import Header from './Components/Header/Header';
import Members from './Components/Members/Members';


function App() {
  return (
    <div>
      <Header></Header>
      <h1 style={{ color: "PaleGreen", textAlign: "center" }}>Members who are with us</h1>
      <Members></Members>

    </div>
  );
}

export default App;
