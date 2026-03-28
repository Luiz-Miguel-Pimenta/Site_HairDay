import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector(".form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e  Define a data mínima com sendo a data atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
    //Previne o comportamento padrão de carregar a página.
    event.preventDefault();

    try {
        // Recuperando o nome do cliente.
        const name = clientName.value.trim();

        if(!name){
            return alert("Informe o nome do cliente");
        }
        
        // Recupera o horário selecionado.
        const hourSelected = document.querySelector(".hour-selected");

        // Verifica se tem horário selecionado.
        if(!hourSelected){
            return alert("Selecione o horário");
        }

        // Recupera somente a hora.
        const [hour] = hourSelected.innerText.split(":");

        // Insere a hora na data.
        const when = dayjs(selectedDate.value).add(hour, "hour");

        // Gera um ID em forma de texto.
        const id = String( new Date().getTime());

        // Faz o agendamento.
        await scheduleNew({
            id, 
            name, 
            when,
        })

        //Recarregar o agendamento.
        await schedulesDay();

        // Limpa o input de nome do cliente.
        clientName.value = "";
             
    } catch (error) {
        alert("Não foi possível realizar o agendamento.");
        console.log(error);
    }
}