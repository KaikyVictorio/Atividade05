var tipoPagamento = Number(prompt("Menu: \n1.PIX \n2.CRÉDITO \n3.DÉBITO \n4.BOLETO"));
switch (tipoPagamento) {
    case 1:
        alert("Pagamento com: PIX");
        break;
    case 2:
        alert("Pagamento com : CR\u00C9DITO");
        break;
    case 3:
        alert("Pagamento com: D\u00C9BITO");
        break;
    case 4:
        alert("Pagamento com : BOLETO");
        break;
    default:
        alert("Tipo de pagamento inv\u00E1lido");
        break;
}
