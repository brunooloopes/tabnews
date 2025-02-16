const { somar } = require("../models/calculadora.js");

test("soma 2 + 2 deveria retornar 4", () => {
    const resultado = somar(2, 2);
    expect(resultado).toBe(4);
});

test("soma 5 + 100 deveria retornar 105", () => {
    const resultado = somar(5, 100);
    expect(resultado).toBe(105);
});

test("soma 'banana' + 100 deveria retornar 'Erro'", () => {
    const resultado = somar("banana", 100);
    expect(resultado).toBe("Erro");
});
