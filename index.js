// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    name = cats.push("Ralph")
}
function destructivelyPrependCat(name) {
    name = cats.unshift("Bob")

}
function destructivelyRemoveLastCat(name) {
    name = cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    name = cats.shift();
}
function appendCat(name) {
    const copyCat = cats.slice();
    copyCat.push(name)
    return copyCat
}
function prependCat(name) {
    const copyCat = cats.slice();
    copyCat.unshift(name)
    return copyCat
}
function removeLastCat(name) {
const copyCat = cats.slice();
copyCat.pop(name)
return copyCat
}
function removeFirstCat(name) {
    const copyCat = cats.slice();
    copyCat.shift(name)
    return copyCat
    }