import React from "react";
import ReactDOM  from "react-dom/client";
// creating a component
function Greeting() {
    return <h2>My first component</h2>;
}
// export default Greeting;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting></Greeting>);