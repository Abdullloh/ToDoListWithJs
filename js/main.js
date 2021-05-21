//change position of text area's deafoult value
let value = document.querySelector('textarea').value;
let index = value.indexOf('D');
let slice = value.slice(index);
let result = value.replace(value,slice);
 document.querySelector('textarea').value = result;
 let items = document.querySelector('#items');
     
 if(!('data' in localStorage)) {
    localStorage.data = '[]';

}

 //When clicked on inputs remove input's placeholder
 let input = document.getElementsByClassName('input');

for(element of input){
    element.onfocus = function(event){
    event.target.placeholder = ''
    }}

let textArea = document.querySelector('textarea');
    textArea.addEventListener('focus',function(event){
        event.target.value = '';
    })

//Button clicker
let btn = document.getElementById('create');
let number = document.querySelector('.day-container h1');
let month = document.querySelector('.day-container h4');
let time = document.querySelector('.time');
let title = document.querySelector('.info h4');
let motion = document.querySelector('.info p');
let icon = document.querySelector('.ico');
let arr = [];
btn.onclick = function(){
  let title = document.getElementById('toDoName').value
  let icon = document.getElementById('icons').value
  motion.innerText = document.getElementById('textarea').value
  let hours = document.querySelector('#time')
  let result = new Date(hours.value).getDate();
  let result2 = new Date(hours.value).getMonth();
  number.innerText = result;
  month.innerText = result2;
  
  let toDo = `
  <div class="item"> 
  <div class="date">
      <div class="day-container"><h1>${result}</h1><h4>${result2}</h3></div>
      <div class="time" style="margin-right: 30px;">80:00</div>
  </div>
  <div class="info">
       <span>
        <h4>${title}</h4>
        <p>${ motion.innerText }</p>
       </span>
       <span class="ico">${icon}</span>
       <button>Started</button>
  </div>
</div>`

// items.innerHTML += toDo;

let toDoData = {
    title:title,
    icon:icon,
    result:result,
    result2:result2,
    motion:motion.innerText,
}
  
  let no = arr.push(toDoData)
  localStorage.data = JSON.stringify(arr);
  console.log(arr);
  printToScreen();
  
}

function printToScreen() {
    var list = '';

    var toDos = JSON.parse(localStorage.data);
    toDos.forEach(item => {
        
        list +=  `
        <div class="item"> 
        <div class="date">
            <div class="day-container"><h1>${item.result}</h1><h4>${item.result2}</h3></div>
            <div class="time" style="margin-right: 30px;">80:00</div>
        </div>
        <div class="info">
             <span>
              <h4>${item.title}</h4>
              <p>${item.motion.innerText }</p>
             </span>
             <span class="ico">${item.icon}</span>
             <button>Started</button>
        </div>
      </div>`;

      items.innerHTML = list;
    });
}

printToScreen();

let form = document.querySelector('form')
form.addEventListener('submit',function(event){
    event.preventDefault();
})
//Main Js tasks covered user input

