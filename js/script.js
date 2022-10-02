url = "https://raw.githubusercontent.com/icobasco/sample_data_files/master/pera_misure_sample.json"
const visualizza = ()=> {
    fetch(url).then((dati)=>dati.json()).then((misure)=> {
        let div = document.createElement("div");
        let misurazioni = document.getElementById("misure");
        misurazioni.className = "col-sm-12";
        div.innerHTML = "<div class=\"row\">" + 
            "<div class=\"col-sm-3 border d-flex justify-content-center\">N° Dispositivo</div>" +
            "<div class=\"col-sm-3 border d-flex justify-content-center\">Orario</div>" +
            "<div class=\"col-sm-3 border d-flex justify-content-center\">Temperatura <br/> [°C]</div>" +
            "<div class=\"col-sm-3 border d-flex justify-content-center\">Umidità <br/> [%RH]</div>" +
            "</div>";
        misurazioni.appendChild(div);
        for (var misura of misure)  {
            let row = document.createElement("div");
            row.innerHTML = "<div class=\"row\">" + 
                "<div class=\"col-sm-3 border d-flex justify-content-center\">" + misura.lora_device_id + "</div>" +
                "<div class=\"col-sm-3 border d-flex justify-content-center\">" + cleanTimestamp(misura.measured_at) + "</div>" +
                "<div class=\"col-sm-3 border d-flex justify-content-center\">" + cleanTemperature(misura.data.sensor1.lowRes.temperature) + "</div>" +
                "<div class=\"col-sm-3 border d-flex justify-content-center\">" + misura.data.sensor1.lowRes.humidity + "</div>" +
                "</div>";
            misurazioni.appendChild(row);
        }

    })
}

const cleanTimestamp = (timestamp)=> 
    timestamp.substring(0, 4) + "/" + timestamp.substring(5, 7) + "/" + timestamp.substring(8, 10) + " - " + timestamp.substring(11, 19);

const cleanTemperature = (temperature)=>
    temperature /= 10
;


