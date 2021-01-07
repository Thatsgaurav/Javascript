const button = document.querySelector('button');

//button.onclick = function() {

//};

const buttonClickHandler = () => {
    alert('Button!')
};

const anotherButtonClickHandler = () => {
    console.log('This was another clicker!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

button.addEventListener('click', () => {
    console.log('Clicked!');
});

setTimeout(() => {
    button.removeEventListener('click', buttonClickHandler);
}, 2000);
