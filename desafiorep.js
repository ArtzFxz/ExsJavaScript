//  DESAFIO 
alert(" Bem-vindo à Cafeteria! ");

let continuar = true;

while (continuar) {
    const nome = prompt("Qual é o seu nome?");
    const bebida = prompt("Qual bebida você deseja? (Café, Chá, Suco)");
    
    if (confirm("Deseja adicionar açúcar?")) {
        alert(`${nome}, seu ${bebida} com açúcar está sendo preparada!`);
    } else {
        alert(`${nome}, seu ${bebida} sem açúcar está sendo preparada!`);
    }
    
    if (confirm("Deseja um acompanhamento?")) {
        const acompanhamento = prompt("Qual acompanhamento? (Bolo, Biscoito, Sanduíche)");
        alert(`Acompanhamento selecionado: ${acompanhamento}`);
    } else {
        alert("Nenhum acompanhamento selecionado.");
    }
    
    continuar = confirm("Deseja fazer outro pedido?");
}

alert("Obrigado por visitar nossa cafeteria! Volte sempre!");