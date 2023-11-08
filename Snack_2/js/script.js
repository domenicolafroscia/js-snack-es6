const squads = [
    {
        nome: "Roma",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Milan",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Inter",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Napoli",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "Juventus",
        punti_fatti: 0,
        falli_subiti: 0
    },
];
console.log(squads);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

squads.forEach((squad) => {
    squad.punti_fatti = randomNumber(15, 70);
    squad.falli_subiti = randomNumber(15, 70);
});

function objectArray(array) {
    const newArray = [];
    array.forEach((squads) => {
        const { nome, falli_subiti} = squads;
        newArray.push(nome, falli_subiti);
    });
    return newArray;
}

const resultArray = objectArray(squads);
console.log(resultArray);
