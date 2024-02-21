/*
Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.


Média total resultante do exercício anterior: 20865.37 com 2 valores flutuantes fixados (toFixed()).
*/

const mediaMensalDistribudora = 20865.37 //retirada do ex anterior;

const faturamentoSP = 67836.43;
const faturamentoRJ = 36678.66;
const faturamentoMG = 29229.88;
const faturamentoES = 27165.48;
const outrosFaturamentos = 19849.53;

const porcentagemSP = ((faturamentoSP * 100) / mediaMensalDistribudora).toFixed(2);
const porcentagemRJ = ((faturamentoRJ * 100) / mediaMensalDistribudora).toFixed(2);
const porcentagemMG = ((faturamentoMG * 100) / mediaMensalDistribudora).toFixed(2);
const porcentagemES = ((faturamentoES * 100) / mediaMensalDistribudora).toFixed(2);
const porcentagemOutros = ((outrosFaturamentos * 100) / mediaMensalDistribudora).toFixed(2);

console.log("SP:", porcentagemSP +"%", "\nRJ:", porcentagemRJ +"%","\nMG:", porcentagemMG +"%",
    "\nES:", porcentagemES +"%", "\nOutros:", porcentagemOutros + "%");
