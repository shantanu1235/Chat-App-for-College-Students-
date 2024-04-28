import { ChatEngine} from "react-chat-engine";

import './App.css';
import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

const App = () => {
  if(!localStorage.getItem('userName')) return<LoginForm /> 
  return (
    <ChatEngine 
      height="100vh"
      projectID="0cff43f0-2541-452a-a50b-7832fe31329c"
      userName={localStorage.getItem('userName')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App;