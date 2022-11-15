const text = document.querySelector('#duplicateField');
const form = document.querySelector('#formField');
const input = document.querySelector('#inputText');

input.addEventListener('keypress',(event) =>{
    text.textContent = text.textContent + event.key;
 });

 form.addEventListener('submit',(event) => {
    event.preventDefault();
    console.log(text.textContent);
    text.textContent = '';
    form.reset();
 });