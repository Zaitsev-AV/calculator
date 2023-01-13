let a = ''
let b = ''
let sign = ''
let finish = false

const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', 'X', '/']

// const buttons = document.querySelector('.buttons'); // Получаем событие о нажатии кнопки.
const calcScreen = document.querySelector('.calc-screen p') // Значене на экране

const clearCalcScreen = () => { // Очистка экрана калькулятора
			let a = ''
			let b = ''
			let sign = ''
			let finish = false
			calcScreen.textContent = 0;
}
document.querySelector('.ac').onclick = clearCalcScreen

document.querySelector('.buttons').onclick = (event) => {
			
			if (!event.target.classList.contains('btn')) return;// Это условие исключает нажате не на кнопку.
			if (event.target.classList.contains('ac')) return; //clearCalcScreen(); // Очищается экрана калькулятора
			
			calcScreen.textContent = ''//При нажатии на кнопку сбрасывается ноль с экрана калькулятора
			//Получение текста с нажатия кнопки.
			const value = event.target.textContent
			
			// console.log(a += calcScreen.textContent += value)
			// Проверяем есть ли значение value  в массиве number
			if (number.includes(value)) {
						if (b === '' && sign === '') {
									/*a += calcScreen.textContent += value; сразу писал так, но  в последствии когда нажимаешь знак
								и потом опять число, то слеплялось все сто было до этого на экране и то число которое нажал */
									a += value; // если значение есть то добавляем его в переменную а
									calcScreen.textContent = a // выволим переменную а на экран калькулятора.
						} else if (a !== '' && b !== '' && finish) {
									b = value
									finish = false
									calcScreen.textContent = b
						} else {
									b += value;
									calcScreen.textContent = b
						}
						return
						
			}
			if (action.includes(value)) { // Нажатие на кнопки математических действий
						sign = value
						calcScreen.textContent = sign
						console.log(a, sign, b)
						return
			}
			if (value === '=') {
						if (b === '') b = a
						switch (sign) {
									case '+':
												a = +a + +b
												break
									case '-':
												a = a - b
												break
									case "X":
												a = a * b
												break
									case "/":
												break
						}
						finish = true
						calcScreen.textContent = a;
			}
			
};

// buttons.addEventListener('click', function (event) {
// 			i
// })



