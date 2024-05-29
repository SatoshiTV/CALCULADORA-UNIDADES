function convertir() {
    let tipo = document.getElementById("tipo").value;
    let entrada = parseFloat(document.getElementById("entrada").value);
    let resultado = document.getElementById("resultado");
  
    if (tipo === "longitud") {
      let unidades = {
        "Kilómetro": entrada * 1000,
        "Metro": entrada,
        "Centímetro": entrada * 100,
        "Milímetro": entrada * 1000,
        "Milla": entrada * 1609.34,
        "Yarda": entrada * 0.9144,
        "Pie": entrada * 0.3048,
        "Pulgada": entrada * 0.0254
      };
      mostrarResultado(unidades);
    } else if (tipo === "velocidad") {
      let unidades = {
        "Millas por hora": entrada * 0.621371,
        "Millas por segundo": entrada * 0.000277778,
        "Kilómetros por hora": entrada * 1.60934,
        "Kilómetros por segundo": entrada * 0.000277778,
        "Nudo": entrada * 0.514444,
        "Metros por hora": entrada * 0.277778,
        "Metros por segundo": entrada
      };
      mostrarResultado(unidades);
    } else if (tipo === "masa") {
      let unidades = {
        "Tonelada": entrada * 0.001,
        "Kilogramo": entrada,
        "Gramo": entrada * 1000,
        "Miligramo": entrada * 1000000,
        "Libra": entrada * 2.20462,
        "Onza": entrada * 35.274
      };
      mostrarResultado(unidades);
    }
  }
  
  function mostrarResultado(unidades) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    for (let unidad in unidades) {
      resultado.innerHTML += `<p>${unidad}: ${unidades[unidad]}</p>`;
    }
  }
  