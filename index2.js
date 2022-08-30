window.addEventListener('click', () => {
    console.log('Window');
}, false);

document.addEventListener('click', () => {
    console.log('Document');
}, false);

document.querySelector('.div2').addEventListener('click', () => {
    console.log('DIV 2');
}, false);

document.querySelector('.div1').addEventListener('click', () => {
    console.log("DIV 1");
}, false);

document.querySelector('.button').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.innerText = 'clicked!');
}, false);