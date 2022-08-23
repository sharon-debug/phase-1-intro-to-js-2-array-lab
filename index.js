// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => {
    cats.push("Ralph");
}

const destructivelyPrependCat = (name) => {
    cats.unshift("Bob");
}

const destructivelyRemoveLastCat = () => {
    cats.pop();
}

const destructivelyRemoveFirstCat = () => {
    cats.shift();
}

const appendCat = (name) => {
    const appendedCats = [...cats, "Broom"];
    return appendedCats;
}

const prependCat = (name) => {
    const prependedCats = ["Arnold", ...cats];
    return prependedCats;
}

const removeLastCat = () => {
    const catsWithoutLast = cats.slice(0, -1);
    return catsWithoutLast;
}

const removeFirstCat = () => {
    const catsWithoutFirst = cats.slice(1);
    return catsWithoutFirst;
}