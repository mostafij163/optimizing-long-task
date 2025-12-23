import { block } from './lib/block.js';

function longTaskHandler() {
    block(5);
    // block(30);
    // block(10);
    // block(5)
    // block(50)
    requestAnimationFrame(function rafHandler() {
        block(2);
    });
    setTimeout(function zeroDelayHandler() {
        block(2);
    }, 0);
}

const button = document.querySelector('button');
button.addEventListener('click', longTaskHandler);

