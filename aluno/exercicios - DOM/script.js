/** 
 * 1. Implemente uma função que troque a cor de fundo da página, modificando o background-color do body
 * 2. Implemente uma função que troque a fonte dos títulos da página (se limite à fontes de sistema para simplificação)
 * 3. Implemente uma função que remove a seção de meta informações dos artigos (autor, data de publicação, comentários)
 * 4. Implemente uma função que insira um emoji, passado via parâmetro, antes de todos os primeiros parágrafos dos artigos
 * 5. Implemente uma função que insira um aviso, no topo da listagem de artigos:
 * 
 *		<div class="alert">
 *			<p>⚠️ Atenção: os textos abaixos são excertos gerados com IA apenas porque são exemplos de preenchimento para uma atividade de programção. 
 *           Leia, escreva, estude: não terceirize sua humanidade para uma máquina espertinha de autocompletar.</p>
 * 		</div> 
 */

function corFundo (cor){
    let fundo = document.querySelector("body")
    fundo.style.backgroundColor = cor
}

function fonteTitulo (fonte){
    let titulo = document.querySelectorAll("h2")
    titulo.forEach(t => {
        titulo.style.fontFamily = fonte
    })
}

function removerSecao (){
    let remover = document.querySelectorAll(".meta")
    remover.forEach(r => {
        remover.remove()
    })
}

function addEmoji(emoji){
    let adicionar = document.querySelectorAll("article")
    adicionar.forEach(a => {
        adicionar.textContent()
    })
}

