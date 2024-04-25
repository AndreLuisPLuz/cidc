import {
    Sum,
    Sub,
    Multiplication,
    Division
} from "../../common/calc";

describe("Calculadora", () => {
    it("Deve retornar o resultado da soma de 1 + 2", () => {
        const res = Sum(1, 2);
        expect(res).toBe(3);
    });

    it("Deve retornar o resultado da subtração de 1 - 2", () => {
        const res = Sub(1, 2);
        expect(res).toBe(-1);
    });

    it("Deve retornar a multiplicação de 3 * 1", () => {
        const res = Multiplication(3, 1);
        expect(res).toBe(3);
    });

    it("Em uma divisão com ambos os valores diferentes de zero, deve retornar o resultado.", () => {
        const res = Division(10, 2);
        expect(res).toBe(5);
    });

    it("Em uma divisão onde o divisor seja igual a zero, deve levantar uma exceção.", () => {
        expect(() => {
            Division(10, 3);
        }).toThrow(RangeError);
    });
});