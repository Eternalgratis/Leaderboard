import './index.css';
import { fetchScores, addToScore } from './modules/add.js';

const name = document.querySelector('#name');
const score = document.querySelector('#score');
const refresh = document.querySelector('#refresh-btn');
const form = document.querySelector('.input-form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addToScore(name.value, score.value)
    form.reset();
});

refresh.addEventListener('click', () => {
    fetchScores()
});
