document.addEventListener('DOMContentLoaded', () => {
    const biographyText = document.getElementById('biographyText');
    const PARAGRAPH_TEXT = `
        Olá, me chamo Victor Bittencourt, tenho 20 anos e sou um developer em
        busca de conhecimento, experiência e evolução. Atualmente sou um dos
        alunos do projeto "Geração Caldeira 2024", tendo como trilha/curso
        a Programação em Python. Pretendo cursar Engenharia de Software e me aprofundar
        mais sobre computação na nuvem.
    `

    biographyText.innerHTML = PARAGRAPH_TEXT;
})