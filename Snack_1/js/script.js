const bikes = [
    {
        nome: "bike1",
        peso: "9kg"
    },
    {
        nome: "bike2",
        peso: "7kg"
    },
    {
        nome: "bike3",
        peso: "11kg"
    },
    {
        nome: "bike4",
        peso: "6kg"
    },
    {
        nome: "bike5",
        peso: "8kg"
    },
];
console.log(bikes);

const {nome, peso} = bikes[3];

console.log(nome, peso);

const result = `La bici con il peso minore è la ${nome} con un peso di ${peso}`
console.log(result);

document.getElementById("bike").innerHTML = result;