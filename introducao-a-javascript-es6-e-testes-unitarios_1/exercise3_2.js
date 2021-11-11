const div = document.getElementById('counter');
const button = document.getElementById('button');
clickCount = 0;
button.addEventListener('click', () => {    
  clickCount++;
  div.innerHTML = clickCount;
});