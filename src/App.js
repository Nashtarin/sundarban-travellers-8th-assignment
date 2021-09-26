
import './App.css';
import Header from './Components/Header/Header';
import Members from './Components/Members/Members';




function App() {
  return (
    <div>

      <Header></Header>
      <h3 style={{ color: "PaleGreen", marginLeft: '270px' }}>Members who are with us</h3>

      <Members></Members>

    </div>
  );
}

export default App;
