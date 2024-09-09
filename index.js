function pegarRegioes() {
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes")
    .then((response) => response.json())
    .then((response) => {
      for (let i = 0; i <= response.length - 1; i++) {
        regiao.innerHTML += `<option value="${response[i].id}">${response[i].nome}</option>`;
      }
    });
}

pegarRegioes();

function pegarEstados(idRegiao) {
  estado.innerHTML = "<option selected disabled>Selecionar Estado</option>";
  cidades.innerHTML = "";

  fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${idRegiao}/estados`
  )
    .then((response) => response.json())
    .then((response) => {
      for (let i = 0; i <= response.length - 1; i++) {
        estado.innerHTML += `<option value="${response[i].id}">${response[i].nome}</option>`;
      }
    });
}


regiao.onchange = (event) => {
  pegarEstados(event.target.value);
};


function pegarCidades(idestado) {
    cidades.innerHTML = "";
    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idestado}/municipios`
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i <= response.length - 1; i++) {
        cidades.innerHTML += `<option >${response[i].nome}</option>`;
        }
      });
  }
  
  function pegarBairros(idestado) {
    bairros.innerHTML = "";
    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/{municipio}/distritos`
    )
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i <= response.length - 1; i++) {
        bairros.innerHTML += `<option >${response[i].nome}</option>`;
        }
      });
  }
  estado.onchange = (event) => {
    pegarCidades(event.target.value);
  };
  

