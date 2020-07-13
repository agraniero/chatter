import React from 'react';


function App() {
  return (
    <form onSubmit={this.usernameSubmitHandler} className="username-container">
      <h1>React Instant Chat</h1>
      <div>
        <input
          type="text"
          onChange={this.usernameChangeHandler}
          placeholder="Enter a username..."
          required />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
