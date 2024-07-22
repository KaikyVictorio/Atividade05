type TipoPagamento = {
"PIX": 1,
"CRÉDITO": 2,
"DÉBITO": 3,
"BOLETO": 4,
}


let  tipoPagamento = Number(prompt("Menu: \n1.PIX \n2.CRÉDITO \n3.DÉBITO \n4.BOLETO"));

switch (tipoPagamento) {
    case 1:
        
        alert(`Pagamento com: PIX`)
        break;
    
    case 2:
        alert(`Pagamento com : CRÉDITO`)

        break;
    
    case 3:
        alert(`Pagamento com: DÉBITO`)
        break;
    case 4:
        alert(`Pagamento com : BOLETO`)
        break;

    default:
        alert(`Tipo de pagamento inválido`)
        break;
}