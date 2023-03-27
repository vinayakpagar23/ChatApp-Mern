import logo from './logo.svg';
import './App.css';
import { Button } from '@chakra-ui/react';
import {Route} from "react-router-dom";
import Home from './components/Home';
import ChatPage from './components/ChatPage';
function App() {
  return (
      <> 
      <Route path ="/" component={Home} exact/>
      <Route path ="/chats" component={ChatPage}/>
      </>
  
  );
}

export default App;
