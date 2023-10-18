const banderas = document.getElementById("banderas");
const query = new URLSearchParams(window.location.search)
const params = query.get('name');

document.addEventListener("DOMContentLoaded", e => {
    fetchData();
})

const fetchData = async() => {
    try {
        const res = await fetch('data.json')
        const data = await res.json()

        const filtroData = data.filter(item => item.name === params)

        banderillas(filtroData);
    } catch (error) {
        console.log(error);
    }
}

const banderillas = data => {
    let elementos = ''
    data.forEach(item => {
        elementos += `
            <article class="card pais">
                <div class="container-img">
                    <img src="${item.flag}" alt="" class="img-fluid img-detalles">
                </div>
                
                <div class="card-content detalle-content">
                    <h3>${item.name}</h3>

                    <div class="info">
                        <p>
                            <b>Nombre Nativo: </b>
                            ${item.nativeName}
                        </p>
                        <p>
                            <b>Visitas: </b>
                            ${item.population}
                        </p>
                        <p>
                            <b>Capital: </b>
                            ${item.capital}
                        </p>
                        <p>
                            <b>Región: </b>
                            ${item.region}
                        </p>
                        <p>
                            <b>Subregión: </b>
                            ${item.subregion}
                        </p>

                        <p>
                            <b>Capital: </b>
                            ${item.capital}
                        </p>

                        <p>
                            <b>Top Level Domain: </b>
                            ${item.topLevelDomain}
                        </p>

                        <p>
                            <b>Moneda: </b>
                            ${item.currencies[0].name}
                        </p>

                        <p>
                            <b>Idiomas: </b>
                            ${item.languages[0].name}
                        </p>
                    </div>
                    
                </div>
            </article>
        `
    });

    banderas.innerHTML = elementos;
}