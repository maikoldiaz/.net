Array.Prototype.encotraIndex = function(num) {
    debugger;
    let result = -1
    for (let i = 0; i < this.length; i++) {
        if (this[i] === num) {
            result = i
            break
        }
    }
    return result
}

function index() {
    debugger;
    // Tu código aca:
    var numeros = [5, 6, 4, 65, 8, 4]
    return numeros.encontraIndex(4)
};

console.log(index())

// numeros.encontraIndex(4) debe devolver 2.