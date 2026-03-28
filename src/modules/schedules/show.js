import dayjs from "dayjs";

// Selecione as sessões manhâ, tarde e noite.
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
    try {
        // Limpa as listas.
        periodMorning.innerHTML = "";
        periodAfternoon.innerHTML = "";
        periodNight.innerHTML = "";
        
        //Renderiza os agendamentos por período.
        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li");
            const time = document.createElement("span");

            // Adiciona o id do agendamento.
            
        });

    } catch (error) {
        alert("Não foi possível exibir os agendamentos");
        console.log(error);
    }
}