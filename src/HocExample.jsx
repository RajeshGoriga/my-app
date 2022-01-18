import React from "react";
function HocExample(Component) {
  return class extends React.Component {
    render() {
      return (
        <div style={{ backgroundColor: "red" }}>
          <Component />
        </div>
      );
    }
  };
}

export default HocExample
