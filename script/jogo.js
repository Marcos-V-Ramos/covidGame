let altura = 0;
let largura = 0;

// window.innerHeight e window.innerWidth pegam a largura e altura.

function telaRedimensionada(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(`Altura: ${altura} e Largura: ${largura}`);}

telaRedimensionada();

function posicaoAleatoria(){
    let eixoX = Math.floor(Math.random() * largura) - 90;
    let eixoY = Math.floor(Math.random() * altura) - 90;

    if(eixoX < 0){
        eixoX = 0;
    }else{
        eixoX = eixoX;
    }

    if(eixoY < 0){
        eixoY = 0;
    }else{
        eixoY = eixoY;
    }

    let covidinho = document.createElement('img'); // Elemento HTML 
    covidinho.src = '../image/covidinho.png'; // Caminho da imagem
    covidinho.className = tamanhosCovidinho(); // Acessa os estilos através do DOM

    //CSS
    covidinho.style.left =  `${eixoX}px`;
    covidinho.style.top  =  `${eixoY}px`;
    
    covidinho.style.position = 'absolute';

    document.body.appendChild(covidinho); // Insere um filho no DOM
    console.log(`Eixo X: ${eixoX} e Eixo Y: ${eixoY}`);

    console.log(tamanhosCovidinho());
}
posicaoAleatoria();


function tamanhosCovidinho(){ // Terá três tamanhos de vírus
    let classe = Math.floor(Math.random() * 3); // Multiplicar por três garante o num. 0, 1 e 2
    
    switch(classe){
        case 0:
            return 'covidinho1' // 'covidinho 1, 2 e 3' são prop. CSS
        case 1:
            return 'covidinho2'
        case 2:
            return 'covidinho3'
    } // Como o 'return' é considerado o fim da function, não necessita do 'break'
}