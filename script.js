const numero = document.getElementById('texto2');

var count = 0;
function adicionar(){
    count++;
    numero.innerHTML = count;
}
function subtrair(){
    count--;
    numero.innerHTML = count;
}
