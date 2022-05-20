import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Icon from './webpackIcon.svg';
import printMe from './print';



function ReactImage(props){
    return (
        <img src={props.image} />
    )
}

function ReactButton(props){
    function handleClick(){
        console.log("you clicked the react button")
    }
    return(
        <button onClick={handleClick}>{props.text}</button>
    )
}


function ExComponent(){
        return (
            <div className='reactComponent'>
                <h1>Hello React</h1>
                <div className='hello'>
                    Hello webpack
                    <ReactImage image={Icon} />
                    <ReactButton text="Click me and check the console!" />
                    
                    
                </div>
            </div>
        );
    

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExComponent />);

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = 'Hello webpack';
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());