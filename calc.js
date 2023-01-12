let a = ''
let b = ''
let sign = ''
let finish = false

const number = ['0','1','2','3','4','5','6','7','8','9','.']
const  action = ['-','+','X','/']

const buttons  = document.querySelector('.buttons'); // Получаем событие о нажатии кнопки.
const calcScreen = document.querySelector('.calc-screen p') // Значене на экране

const clearCalcScreen = () => { // Очистка экрана калькулятора
			let a = ''
			let b = ''
			let sign = ''
			let finish = false
			calcScreen.textContent = 0;
}
	//document.querySelector('.ac').onclick = clearRes()

buttons.addEventListener('click', function (event) {
			if (!event.target.classList.contains('btn')) return;// Это условие исключает нажате не на кнопку.
			if (event.target.classList.contains('ac')) return clearCalcScreen(); // Очищается экрана калькулятора
			
			calcScreen.textContent = ''//При нажатии на кнопку сбрасывается ноль с экрана калькулятора
			//Получение текста с нажатия кнопки.
			 const value = event.target.textContent
			 a += calcScreen.textContent += value;
			calcScreen.textContent = a
			// console.log(a += calcScreen.textContent += value)
			})



