//Criação de uma timeline do GSAP com animações sincronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, //DEPURAÇÃO
    },
});

tl.to(
    '#fanta',
    {
        top: '120%',//MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOP
        left: '0%',
    },
    'orange'
); //Nomeando este trecho de aniumação como 'orange' para sincronização

tl.to(
    '#laranja-cortada',
    {
        top: '160%', //MOVE O ELEMENTO COM ID LARANJA CORTADA PARA 160% DO TOPO
        left: '23%', //MOVE O ELEMENTO PARA 23% DA ESQUERDA
    },
    'orange'
); //Nomeando este trecho de aniumação como 'orange' para sincronização

tl.to(
    '#laranja',
    {
        width: '15%', //REDUZ A LARGURA DO ELEMENDO COM O ID 'LARANJA' PARA 15%
        top: '160%', //MOVE O ELEMENTO COM ID LARANJA CORTADA PARA 160% DO TOPO
        right: '10%', //MOVE O ELEMENTO PARA 10% DA DIREITA
    },
    'orange'
); //Nomeando este trecho de aniumação como 'orange' para sincronização

tl.to(
    '#folha',
    {
        top: '110%', //MOVE O ELEMENTO COM ID FOLHA PARA 110% DO TOPO
        rotate: '530 deg', //ROTACIONA O ELEMENTO EM 130 GRAUS
        left: '70%', //MOVE O ELEMENTO PARA 70% DA ESQUERDA
    },
    'orange'
); //Nomeando este trecho de aniumação como 'orange' para sincronização

tl.to(
    '#folha2',
    {
        top: '110%', //MOVE O ELEMENTO COM ID FOLHA PARA 110% DO TOPO
        rotate: '530deg', //ROTACIONA O ELEMENTO EM 130 GRAUS
        left: '0%', //MOVE O ELEMENTO PARA 70% DA ESQUERDA
    },
    'orange'
); //Nomeando este trecho de aniumação como 'orange' para sincronização


//CRIANDO OUTRA TIMELINE


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%', //FIM DA ANIMAÇÃO (TOPO DA TELA ATINGE 50% DA ALTURA QUANDO ESTIVER 20% DA SESSÃO .THREE)
        scrub: true,
        markers: true, //DEPURAÇÃO
    },
});

tl2.from(
    '.lemon1',
    {
        top: '110%', //MOVE O ELEMENTO COM CLASSE LEMON1 PARA 110% DO TOPO
        rotate: '-90deg', //ROTACIONA O ELEMENTO EM -90 GRAUS
        left: '-100%', //MOVE O ELEMENTO PARA -100% DA ESQUERDA
    },
    'ca'
); //Nomeando este trecho de aniumação como 'ca' para sincronização

tl2.from(
    '#cocacola',
    {
        top: '110%', //MOVE O ELEMENTO COM OD COCA COLA PARA 110% DO TOPO
        rotate: '-90deg', //ROTACIONA O ELEMENTO EM -90 GRAUS
        left: '-100%', //MOVE O ELEMENTO PARA -100% DA ESQUERDA
    },
    'ca'
); //Nomeando este trecho de aniumação como 'ca' para sincronização


tl2.from(
    '.lemon2',
    {
        top: '110%', //MOVE O ELEMENTO COM CLASSE LEMON2 PARA 110% DO TOPO
        rotate: '90deg', //ROTACIONA O ELEMENTO EM 90 GRAUS
        left: '100%', //MOVE O ELEMENTO PARA 100% DA ESQUERDA
    },
    'ca'
); //Nomeando este trecho de aniumação como 'ca' para sincronização

tl2.from(
    '#pepsi',
    {
        top: '110%', //MOVE O ELEMENTO COM ID PEPSI PARA 110% DO TOPO
        rotate: '90deg', //ROTACIONA O ELEMENTO EM 90 GRAUS
        left: '100%', //MOVE O ELEMENTO PARA 100% DA ESQUERDA
    },
    'ca'
); //Nomeando este trecho de aniumação como 'ca' para sincronização

tl2.to(
    '#laranja-cortada',
    {
        top: '204%', //MOVE O ELEMENTO COM ID LARANJA-CORTADA PARA 204% DO TOPO
        width: '18%', //AUMENTA A IMAGEM PARA 18%
        left: '42%', //MOVE O ELEMENTO PARA 42% DA ESQUERDA
    },
    'ca'
); //Nomeando este trecho de aniumação como 'ca' para sincronização


tl2.to(
    '#fanta',
    {
        top: '212%', //MOVE O ELEMENTO COM ID LARANJA-CORTADA PARA 204% DO TOPO
        width: '35%', //AUMENTA A IMAGEM PARA 35%
        left: '32%', //MOVE O ELEMENTO PARA 42% DA ESQUERDA
    },
    'ca'
); //Nomeando este trecho de aniumação como 'ca' para sincronização

