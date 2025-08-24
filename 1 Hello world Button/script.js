const button = document.getElementById('btn');
const message = document.getElementById('message');

button.addEventListener('click', function(){
    message.textContent = 'Hello, world!';
    message.style.color = '#007bff';
    message.style.fontSize = '45px' ;

});