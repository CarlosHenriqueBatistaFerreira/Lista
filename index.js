console.log(`Trabalhando com listas`);

console.log(`Cidades que já visitei:`);

const portoVelho = `Porto Velho`;
const curitiba = `Curitiba`;
const colombo = `Colombo`;
const uniaoDaVitoria = `União da Vitória`;
const portoAlegre = `Porto Alegre`;

console.log(portoVelho, curitiba, colombo, uniaoDaVitoria, portoAlegre);

const cidadesQueJaVisitei = new Array(
  `Porto Velho`, 
  `Curitiba`, 
  `Colombo`, 
  `União da Vitória`, 
  `Porto Alegre`
);

cidadesQueJaVisitei.push(`Florianópolis`);

console.log(cidadesQueJaVisitei);

console.log(`A cidade mais linda:`);
console.log(cidadesQueJaVisitei[0]);

console.log(`Meus amigos me disseram que eu nunca fui a Curitiba, eu estava muito bêbado e eles mentiram para mim.`);

cidadesQueJaVisitei.splice(1, 1);
// primeiro número do splice diz a posição do elemento que sera excluído 
// segundo número informa quantos elementos serão excluídos;
console.log(cidadesQueJaVisitei);