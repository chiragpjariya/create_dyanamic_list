let inputtag = document.getElementById('listinput');
let ultag = document.getElementById('ul');
let add = document.getElementById('add');
let remove = document.getElementById('remove');

let clicking_remove=function(){
      let list=document.querySelectorAll('li')
    list.forEach((list)=>{
        list.addEventListener('click',(e)=>{
            console.log(e.target.textContent);
            e.target.remove();
        })
    })
}
add.addEventListener('click', (e) => { 
    let createli = document.createElement('li')
    createli.textContent = inputtag.value;
    ultag.appendChild(createli);
    clicking_remove();
})
remove.addEventListener('click', (e) => {
    ultag.removeChild(ultag.children[0])
})
clicking_remove();
