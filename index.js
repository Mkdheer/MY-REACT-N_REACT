import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById("root"));

const JSXElement = <h1 >This is JSX Element</h1>

const myReactElement = (
    <div>
        <h2>My name is React Element</h2>
    </div>
)

const value = 1000;

const MyFunctionalComponent = () =>{
    return(
    <div>
        {myReactElement}
        <h2>{value + value}</h2>
        <h3>My name is Functional Component</h3>
    </div>
    );
}

 

root.render(
<MyFunctionalComponent/>
);
