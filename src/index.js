import './style.css';
import Icon from './webpackIcon.svg';
import printMe from './print';

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