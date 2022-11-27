const text = document.querySelector('#duplicateField');
const form = document.querySelector('#formField');
const input = document.querySelector('#inputText');

input.addEventListener('input',(event) =>{
    text.textContent = event.target.value;
 });

 form.addEventListener('submit',(event) => {
    event.preventDefault();
    console.log(text.textContent);
    text.textContent = '';
    input.value = '';
 });


