let addToDoButton = document.getElementById('addtodo');
let todoContainer = document.getElementById('todocontainer');
let input = document.getElementById('inputfield');
let clearall = document.querySelector(".clear-btn");


/*addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerHTML = `
    <div class="item-btn">
                <div class="delete">x</div>
                <input type="checkbox">
             </div>
             <p>${input.value}</p>  `;
    todoContainer.appendChild(paragraph)
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration ='line-through'
    })
})*/
addToDoButton.addEventListener('click', () =>{
    if(input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <div class="item-btn">
                <div class="delete">x</div>
                <input class="check" type="checkbox">
             </div>
             <p> ${input.value}</p>  `

             todoContainer.appendChild(newItem);
             input.value = "";
    } else {
        alert('Please enter a task')
    }
})

todoContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove()
    }
})

todoContainer.addEventListener('click',(e) => {
    if(e.target.classList.contains('check')) {
        e.target.parentElement.parentElement.classList.toggle('completed')
    }
})

clearall.addEventListener('click', (e) => {
    todoContainer.innerHTML = ''
})