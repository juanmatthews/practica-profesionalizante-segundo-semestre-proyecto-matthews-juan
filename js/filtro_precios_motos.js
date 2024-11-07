document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const resultsList = document.getElementById('results');
  
    function fetchData() {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', '../json/catalogo.json', true);
  
      xhr.onload = function() {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          const motos = data.vehiculos.motos;
          filteredResults(motos);
        } else {
          console.error('Error al cargar los datos');
        }
      };
  
      xhr.onerror = function() {
        console.error('Error de red');
      };
  
      xhr.send();
    }
  
    function filteredResults(data) {
      const query = searchInput.value.toLowerCase();
      const minPrice = parseFloat(minPriceInput.value) || 0;
      const maxPrice = parseFloat(maxPriceInput.value) || Infinity;
  
      const filteredData = data.filter(item => (
        (item.titulo.toLowerCase().includes(query) || item.marca.toLowerCase().includes(query)) &&
        parseFloat(item.precio.replace('U$D ', '')) >= minPrice &&
        parseFloat(item.precio.replace('U$D ', '')) <= maxPrice
      ));
  
      displayResults(filteredData);
    }
  
    function displayResults(data) {
      resultsList.innerHTML = '';
      if (data.length === 0) {
        resultsList.innerHTML = '<li>No se encontraron resultados</li>';
      } else {
        data.forEach(producto => {
          const listItem = document.createElement('li');
          listItem.innerHTML += `
          <div class="caja">
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <p class="titulo-tarjeta">${producto.titulo}</p>
            <p>${producto.marca}</p>
            <p>${producto.modelo}</p>
            <p>${producto.kilometraje}</p>
            <p>${producto.motor}</p>
            <p>${producto.traccion}</p>
            <p>${producto.transmision}</p>
            <p>${producto.año}</p>
            <p class="precio-auto">${producto.precio}</p>
          </div>`;
          resultsList.appendChild(listItem);
        });
      }
    }
  
    fetchData();
  
    searchInput.addEventListener('input', function(){
      fetchData();
    });
  
    minPriceInput.addEventListener('input', function(){
      fetchData();
    });
  
    maxPriceInput.addEventListener('input', function(){
      fetchData();
    });
  });
  