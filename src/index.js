import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Icon from './webpackIcon.svg';
import Clock from './clock';



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


class ExComponent extends React.Component{
    render(){
        return (
            <div className='reactComponent'>
                <h1>Hello React</h1>
                <div className='hello'>
                    Hello webpack
                    <ReactImage image={Icon} />
                    <ReactButton text="Click me and check the console!" />
                    <Clock />
                    
                </div>
            </div>
        );
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExComponent />);

