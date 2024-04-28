import { useState } from "react";
import axios from "axios";
const projectID = "0cff43f0-2541-452a-a50b-7832fe31329c";
const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const authObject = {'Project-ID': projectID, "User-Name": userName, "User-Secret": password}

    try{
        await axios.get("https://api.chatengine.io/chats", {headers: authObject});

        localStorage.setItem("userName", userName);
        localStorage.setItem("password", password);

        window.location.reload();// ye window.location.reload() ek function hai js mei jo reload karega, ye basically isiliye use kiya jata hai jab js ko reload karega toh ek naya page open ho
        setError('');
    }catch(error){
        setError('Oops, incorrect credentials.');
    }
    //username | password => Chatengine -> give meassages
    //works out -> logged in
    //error -> try with new username...
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
