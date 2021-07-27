import React from "react";
import "./styles.css";

export default function App() {
  const [tweets, setTweets] = React.useState([]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
