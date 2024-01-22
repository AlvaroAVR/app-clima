let apiKey = 'd9dd21169b8150fab8a4d31ffec15984';
let difkelvin = 273.15

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
    const temperaturaMaxima = response.main.temp_max
    const temperaturaMinima = response.main.temp_min
    const description = response.weather[0].description

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    const tempCiudad = document.createElement('p')
    tempCiudad.textContent = `La temperatura actual es: ${Math.floor(temperatura-difkelvin)}°C`

    const tempMaxCiudad = document.createElement('p')
    tempMaxCiudad.textContent = `La temperatura maxima de hoy es: ${Math.floor(temperaturaMaxima-difkelvin)}°C`

    const tempMinCiudad = document.createElement('p')
    tempMinCiudad.textContent = `La temperatura minima de hoy es: ${Math.floor(temperaturaMinima-difkelvin)}°C`

    const descClima = document.createElement('p')
    descClima.textContent = description

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(tempCiudad)
    divDatosClima.appendChild(tempMaxCiudad)
    divDatosClima.appendChild(tempMinCiudad)
    divDatosClima.appendChild(descClima)
}