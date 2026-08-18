let botao = document.querySelector('.toggle')
let sidebar = document.querySelector('.sidebar')

botao.addEventListener('click', function(){
    sidebar.classList.toggle('open')
})

