document.addEventListener('DOMContentLoaded', function() {
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;
    let menuAberto = false;

    // Alternar menu de acessibilidade
    botaoAcessibilidade.addEventListener('click', function(e) {
        e.stopPropagation();
        menuAberto = !menuAberto;
        opcoesAcessibilidade.classList.toggle('visivel', menuAberto);
    });

    // Aumentar fonte
    aumentaFonteBotao.addEventListener('click', function(e) {
        e.stopPropagation();
        tamanhoAtualFonte = Math.min(tamanhoAtualFonte + 0.1, 1.5);
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Diminuir fonte
    diminuiFonteBotao.addEventListener('click', function(e) {
        e.stopPropagation();
        tamanhoAtualFonte = Math.max(tamanhoAtualFonte - 0.1, 0.8);
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function() {
        if (menuAberto) {
            menuAberto = false;
            opcoesAcessibilidade.classList.remove('visivel');
        }
    });

    // Impedir que o clique no menu feche ele
    opcoesAcessibilidade.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});