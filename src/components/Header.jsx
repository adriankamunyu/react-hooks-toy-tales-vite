import React from "react";

function Header({onClick}) {
  return (
    <div id="toy-header">
      <img
        src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
        alt="toy header"
      />
      <button onClick={onClick}>Add a Toy</button>
    </div>
  );
}

export default Header;
