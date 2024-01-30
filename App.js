const Parent = React.createElement("div",{id:"Parent"},
                React.createElement("div",{id:"child"},
                React.createElement("h1",{},"i am h1 tag")));
console.log(Parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent)