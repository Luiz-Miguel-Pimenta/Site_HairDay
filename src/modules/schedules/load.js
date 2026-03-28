import { hoursLoad } from "../form/hours-load.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";

// Seleciona o input de data.
const selectedDate = document.getElementById("date");

// O "export" diz que essa função é "exportável".
export async function schedulesDay(){

    // Obtém a data do input.
    const date = selectedDate.value;

    // Buscar na API os agendamentos.
    const dailySchedules = await scheduleFetchByDay({ date });

    // Exibe os agendamentos.
    schedulesShow({ dailySchedules });

    // Rederiza as horas disponíveis.
    hoursLoad({ date });
}