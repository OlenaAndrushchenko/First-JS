import { name } from "./js/ex1.js";
import { sum } from "./js/ex2.js";
import { printTerminal } from "./js/printData.js";

const numb1 = 3
const numb2 = 5

function app() {
   printTerminal(name)
   printTerminal(sum(numb1, numb2))
}

app()