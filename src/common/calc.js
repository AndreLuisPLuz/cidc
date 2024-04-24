const Sum = (a, b) => {
    return a + b;
}

const Sub = (a, b) => {
    return a - b;
}

const Multiplication = (a, b) => {
    return a * b;
};

const Division = (a, b) => {
    if (b == 0)
        throw new RangeError("The divisor cannot be zero.");

    return a / b;
}

export {
    Sum,
    Sub,
    Multiplication,
    Division
};