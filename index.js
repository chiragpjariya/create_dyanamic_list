let inputtag = document.getElementById('listinput');
let ultag = document.getElementById('ul');
let add = document.getElementById('add');
let remove = document.getElementById('remove');

add.addEventListener('click', (e) => {

    let createli = document.createElement('li')
    createli.textContent = inputtag.value;
    ultag.appendChild(createli)
})
remove.addEventListener('click', (e) => {
    ultag.removeChild(ultag.children[0])
})
