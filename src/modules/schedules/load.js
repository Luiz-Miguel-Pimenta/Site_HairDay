import { hoursLoad } from "../form/hours-load.js";

// Seleciona o input de data.
const selectedDate = document.getElementById("date");

// O "export" diz que essa função é "exportável".
export function schedulesDay(){

    // Obtém a data do input.
    const date = selectedDate.value;

    // Rederiza as horas disponíveis.
    hoursLoad({ date });
}