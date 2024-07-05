import React from "react";
import Comment from "./Comment";

const App = (props) => {
  return (
    <Comment 
      user={props.user}
      text="Good job!"
      date={new Date('2019-01-01T11:32:19.56Z')}
    />
  );
};

export default App;
