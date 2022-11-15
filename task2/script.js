const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Пример использования команды console.log');
})


const Alert = document.querySelector('#alert');

Alert.addEventListener('click', () => {
    alert('Добро пожаловать!');
})

const Prompt = document.querySelector('#prompt');

Prompt.addEventListener('click', () => {
    prompt('Введите ваше имя');
})