const intro = document.querySelector('#intro');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Welcome to the Treehouse!';

intro.appendChild(content);