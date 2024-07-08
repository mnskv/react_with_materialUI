import './App.css';
import Header from './components/Header';
import MyCard from './components/CardUI/MyCard';
import MyForm from './components/MyForm.jsx';
import Card2 from './components/CardUI/Card2.js';
import Message from './components/MessageApp/Message.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Message />

      
      <MyForm />
      <div className="card-container">
        <MyCard />
        <MyCard />
        <MyCard />
      </div>
      
      <Card2 />
      
      
    </div>
  );
}

export default App;
