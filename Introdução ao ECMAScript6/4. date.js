
const hoje = new Date();//armazena a data atual
console.log(`${hoje}`);

console.log(`${hoje.getDay()}`);
//getDay retorna um valor entre 0 à 6 representando o dia da semana
//[Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sábado]

console.log(`${hoje.getDate()}`);//getDate retorna a data do dia
console.log(`${hoje.getMonth()}`);
//getMonth um valor de 0 à 11 representando o mês do ano
//[Janeiro, Fevereiro, Março, Abril, Maio, Junho, Junho, Agosto, Setembro, Outubro, Novembro, Dezembro]

console.log(`${hoje.getFullYear()}`);//getFullYear retorna o ano da data armazenada
console.log(`${hoje.getHours()}`);//getHours retorna as horas da data armazenada
console.log(`${hoje.getMinutes()}`);//getMinutes retorna os minutos da data armazenada
console.log(`${hoje.getSeconds()}`);//getSeconds retorna os segundos da data armazenada
console.log(`${hoje.getMilliseconds()}`);//getMilliseconds retorna os milisegundos da data armazenada
