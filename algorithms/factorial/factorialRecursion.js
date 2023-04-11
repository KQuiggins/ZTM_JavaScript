function factorialRecursive(number) {
    if (number === 2) {
        return 2;
    }
    return number * factorialRecursive(number - 1)
}