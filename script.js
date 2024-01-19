let apiKey = 'd9dd21169b8150fab8a4d31ffec15984';

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudad').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(response){
    console.log(response)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML= ''

    const ciudadNombre = response.name
    const temperatura = response.main.temp
    const description = response.weather[0].description

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    divDatosClima.appendChild(ciudadTitulo)
}