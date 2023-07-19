import 'regenerator-runtime';
import './data-source.js';
import '../styles/main.css';
import '../styles/responsive.css';

const menuButtonElement = document.querySelector('#menu');
const drawerElement = document.querySelector('#drawer');
const closeMenuButton = document.querySelector('main');

menuButtonElement.addEventListener('click', event => {
    drawerElement.classList.toggle('open');
    event.stopPropagation();
});

closeMenuButton.addEventListener('click', event => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
})