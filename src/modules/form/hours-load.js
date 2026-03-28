import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }){
    //Limpa a lista de horários
    hours.innerHTML = "";

    // Obtém a lista de horários ocupados.
    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"));

    const opening = openingHours.map((hour) => {

        // Recupera somente a hora. Pega apenas o primeiro valor do array (Ex: "09") e guarda na variável "scheduleHour";
        const [scheduleHour] = hour.split(":");

        //Adiciona a hora na date e verificar se está no passado ou depois.
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

        const available = !unavailableHours.includes(hour) && !isHourPast;

        return {
            hour,
            available, 
        }
    })

    // Rederizar os horários.
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li");

        li.classList.add("hour");
        
        if(available === true){
            li.classList.add("hour-available");
        } else {
            li.classList.add("hour-unavailable");
        }

        li.textContent = hour;

        if(hour === "9:00" ){
            hoursHeaderAdd("Manhã");
        } else if (hour === "13:00") {
            hoursHeaderAdd("Tarde");
        } else if (hour === "18:00") {
            hoursHeaderAdd("Noite");
        }

        hours.append(li);
    })

    // Adiciona o evento de clique nos horários disponíveis.
    hoursClick();
}

function hoursHeaderAdd(title) {
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;

    hours.append(header);
}