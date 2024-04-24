const { Sum, Sub } = require("../../common/calc");

describe("Calculadora", () => {
    it("Deve retornar o resultado da soma de 1 + 2", () => {
        const res = Sum(1, 2);
        expect(res).toBe(3);
    });

    it("Deve retornar o resultado da subtração de 1 - 2", () => {
        const res = Sub(1, 2);
        expect(res).toBe(-1);
    });
});