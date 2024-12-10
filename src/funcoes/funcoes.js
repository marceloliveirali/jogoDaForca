function atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida)
{
    let palavraOcultaArray = palavraOculta.split('');

    for (let i = 0; i < palavraEscolhida.length; i++)
    {
        if (palavraEscolhida[i] === letraDigitada)
        {
            palavraOcultaArray[i] = letraDigitada;
        }
    }

    return palavraOcultaArray.join('');
}

function validarLetraDigitada(letraDigitada)
{
    const alfabeto = [
        'a', 'e', 'i', 'o', 'u',
        'b', 'c', 'd', 'f', 'g',
        'j', 'k', 'l', 'm', 'n',
        'p', 'q', 'r', 's', 't',
        'v', 'w', 'x', 'y', 'z',
        'h' 
    ];

    if (letraDigitada.length === 1 && alfabeto.includes(letraDigitada) === true)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function verificarJogoGanho(palavraOculta, palavraEscolhida)
{   
    if (palavraOculta === palavraEscolhida)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

function exibirMensagemFimDeJogo(statusJogo, palavraEscolhida)
{
    if (statusJogo === 'venceu')
    {
        const tituloFinalT = 'TRIUNFO'.padStart(26, "-").padEnd(46, '-');
        console.log("\n" + tituloFinalT);
        console.log(`Você acertou o nome da fruta: ${palavraEscolhida}`);
        console.log("-".padStart(26, '-').padEnd(46, '-')); 
    }
    else
    {
        const tituloFinalP = 'VOCÊ PERDEU!'.padStart(25, "-").padEnd(55, '-');
        console.log("\n" + tituloFinalP);
    }
}

export { atualizarPalavraOculta, validarLetraDigitada, verificarJogoGanho, exibirMensagemFimDeJogo };