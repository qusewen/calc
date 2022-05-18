
let num1 = "";
let num2 = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];

const out = document.querySelector(".calc_result p");

function clearAll() {
  num1 = "";
  num2 = "";
  sign = "";
  finish = false;
  out.textContent = "0";
}

document.querySelector(".calc_res").onclick = clearAll;

document.querySelector(".number__zone").onclick = (event) => {
  if (!event.target.classList.contains("calc__btn")) return;

  if (event.target.classList.contains("calc_res")) return;

  out.textContent = "";

  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (num2 === "" && sign === "") {
      num1 += key;
      out.textContent = num1;
    } else if (num1 !== "" && num2 !== "" && finish) {
      num2 = key;
      finish = false;
      out.textContent = num2;
    } else {
      num2 += key;
      out.textContent = num2;
    }
    return;
  }
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    return;
  }
  if (key === "=") {
    if (num2 === "") {
      num2 = num1;
    }
    switch (sign) {
      case "+":
        num1 = +num1 + +num2;
        break;
      case "-":
        num1 = num1 - num2;
        break;
      case "/":
        if (num2 === "0") {
          num1 = "Ошибка";
        } else {
          num1 = (num1 / num2).toFixed(5);
        }
        break;
      case "X":
        num1 = num1 * num2;
        break;
    }
    finish = true;
    out.textContent = num1;
  }
};



const ligthWhitebtn = document.querySelector('.theme') ;

function initialState(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName
}

initialState('dark_mode')

function toggleTheme (){
    if(localStorage.getItem('theme') == 'dark_mode'){
        initialState('white_mode')
    }else{
        initialState('dark_mode') 
    }
}

ligthWhitebtn.addEventListener('click', (e) =>{
    e.preventDefault()
    toggleTheme()
})