import dayjs from "dayjs";
import { apiConfig } from "./api-config";

// Buscando na API
export async function scheduleFetchByDay({ date }) {
    try {
        // Fazendo a requisição.
        const response = await fetch(`${apiConfig.baseURL}/schedules`);

        //Converte para JSON.
        const data = await response.json();

        //Filta os agendamentos pelo dia selecionado.
        const dailySchedules = data.filter(( shedule ) => 
            dayjs(date).isSame(shedule.when, "day")
        );

        return dailySchedules;

    } catch (error) {
        console.log(error);
        alert("Não foi possível buscar os agendamentos do dia selecionado.")
    }
}