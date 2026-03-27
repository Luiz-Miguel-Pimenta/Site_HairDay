import { schedulesDay } from "./schedules/load.js"

//Serve após carregar a página
document.addEventListener("DOMContentLoaded", function(){
    schedulesDay();
})