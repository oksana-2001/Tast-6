 const userTextField = document.querySelector('#userTextField');
 
 userTextField.addEventListener('click',(event) =>{
    const userText = prompt('Ведите текст');
    userTextField.textContent = userText;
    event.preventDefault();
 });