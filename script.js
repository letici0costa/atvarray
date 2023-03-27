const input = document.getElementById('input')
const adicionar = document.getElementById('adicionar')
const ordenar = document.getElementById('ordenar')
let array = []

adicionar.addEventListener('click', function(){
  
    array.push(input.value);
    console.log(array)
})
