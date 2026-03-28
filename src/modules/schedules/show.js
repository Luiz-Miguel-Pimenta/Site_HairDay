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
        item.setAttribute("data-id", schedule.id);

        // Adiciona o tempo e nome no item.
        item.innerHTML = `
            <strong>${dayjs(schedule.when).format("HH:mm")}</strong>
            <span>${schedule.name}</span>
            <img
            src="./src/assets/cancel.svg"
            alt="Cancelar"
            class="cancel-icon"
            />
        `;
        
        // Obtém somente a hora.
        const hour = dayjs(schedule.when).hour();
        // Renderiza o agendamento na sessão (manhâ, tarde ou noite).
        if(hour <= 12){
            periodMorning.appendChild(item);
        } else if (hour > 12 && hour <= 18){
            periodAfternoon.appendChild(item);
        } else {
            periodNight.appendChild(item);
        }

    });

    } catch (error) {
        alert("Não foi possível exibir os agendamentos");
        console.log(error);
    }
}