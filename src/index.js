import input from 'readline-sync';
import listaDeFrutas from './dados/dados.js';
import { atualizarPalavraOculta, validarLetraDigitada, verificarJogoGanho, exibirMensagemFimDeJogo } from './funcoes/funcoes.js';

let titulo = "Jogo da forca";
let tituloPontosEsquerda = titulo.padStart(33, "-");
let tituloPontosDireita = tituloPontosEsquerda.padEnd(53, '-');
let tituloFinal = tituloPontosDireita;

console.log(tituloFinal);

const palavraEscolhida = listaDeFrutas[Math.floor(Math.random(0, 1) * listaDeFrutas.length)];

let primeiraLetra = palavraEscolhida[0];
let underline = '_'.repeat(palavraEscolhida.length - 1);
let palavraOculta = primeiraLetra + underline;

console.log(" ");
console.log(`Adivinhe o nome da fruta com ${palavraEscolhida.length} letras:`);

let statusJogo = 'andamento';
let erros = 4;

while (statusJogo === 'andamento')
{
    console.log (`\nFruta: ${palavraOculta}`);

    const letraDigitada = input.question("Digite uma letra: ").toLowerCase();

    if (validarLetraDigitada(letraDigitada))
    {
        if (palavraEscolhida.includes(letraDigitada))
        {
            palavraOculta = atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida);

            if (verificarJogoGanho(palavraOculta, palavraEscolhida)) 
            {
                statusJogo = 'venceu';
            }
        }
        else
        {
            if (erros >= 2 && erros <= 4)
            {
                erros--;
                console.log(`OPÇÃO ERRADA! Você ainda tem ${erros} chance(s)!`);
            }
            else 
            {
                statusJogo = 'perdeu';
            }
        }
    }
    else
    {
        console.log("\nPor favor, digite uma letra válida");
    }
}

exibirMensagemFimDeJogo(statusJogo, palavraEscolhida);



