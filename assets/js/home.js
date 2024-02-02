const ventas = [
  { nombre: "Casa Bella", src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg", descripcion: "Amplia casa con hermoso jardín y vista panorámica.", ubicacion: "santiago", habitaciones: 3, costo: 200000000, smoke: true, pets: false },
  { nombre: "Casa Acogedora", src: "https://media.istockphoto.com/id/1433548138/es/foto/casa-que-obtiene-energ%C3%ADa-del-techo-de-energ%C3%ADa-solar.jpg?s=1024x1024&w=is&k=20&c=LnwOlv62GZTRjbhvowksjU9Hlwe6gsyw7v6l9ETZcdk=", descripcion: "Encantadora casa con ambiente cálido y chimenea.", ubicacion: "melipilla", habitaciones: 1, costo: 250000000, smoke: false, pets: true },
  { nombre: "Casa del Sol", src: "https://media.istockphoto.com/id/1447708518/es/foto/villa-moderna-exterior-en-verano.jpg?s=1024x1024&w=is&k=20&c=LjKTpemIfka78PXMo2KJCsXW-xUnEP7uRgjjshfv-Ik=", descripcion: "Luminosa casa con grandes ventanales y terraza.", ubicacion: "padre hurtado", habitaciones: 5, costo: 30000000, smoke: true, pets: false },
  { nombre: "Casa Tranquila", src: "https://media.istockphoto.com/id/1483505803/es/foto/casa-con-paneles-solares-y-una-moderna-extensi%C3%B3n-de-madera.jpg?s=1024x1024&w=is&k=20&c=hf5qBDyqbRH7AnfZ7BJkUis_cdJCZoVFOqPrBNsbgLw=", descripcion: "Tranquila casa en una zona residencial, ideal para la familia.", ubicacion: "san antonio", habitaciones: 3, costo: 180000000, smoke: false, pets: false },
  { nombre: "Casa Moderna", src: "https://media.istockphoto.com/id/1402627231/es/foto/nueva-casa-tradicional-al-atardecer.jpg?s=1024x1024&w=is&k=20&c=yVUL0lvK0hsRj9Q7KPaEOlyFL0CwvbFTo3IwNtQlXpc=", descripcion: "Diseño moderno con espacios abiertos y tecnología de última generación.", ubicacion: "cartagena", habitaciones: 4, costo: 280000000, smoke: true, pets: true },
  { nombre: "Casa del Bosque", src: "https://media.istockphoto.com/id/1143467997/es/foto/renderizado-en-3d-de-la-moderna-casa-de-clinker-en-los-estanques-con-piscina-en-la-noche.jpg?s=1024x1024&w=is&k=20&c=rwHH-ZokDZCh_WWTwALMpUKuBN6j-OlOnglToE1Xs-8=", descripcion: "Ubicada en medio de la naturaleza, rodeada de árboles y senderos.", ubicacion: "casa blanca", habitaciones: 3, costo: 220000000, smoke: false, pets: true },
  { nombre: "Casa Elegante", src: "https://media.istockphoto.com/id/1469202195/es/foto/una-casa-con-un-coche-aparcado-delante-de-ella.jpg?s=1024x1024&w=is&k=20&c=n5qjlvRqG_0gs98Gv9egaaA8wSfQ9aS-d6ceKpPBXZQ=", descripcion: "Elegante residencia con acabados de lujo y detalles sofisticados.", ubicacion: "quintero", habitaciones: 3, costo: 210000000, smoke: true, pets: true },
  { nombre: "Casa del Lago", src: "https://media.istockphoto.com/id/1560744923/es/foto/casas-adosadas-modernas-con-elementos-de-pared-de-madera.jpg?s=1024x1024&w=is&k=20&c=DyZdVGd8fwDBoPsKrgsEKB9RGrDd7TS2It-zGz5L4Ps=", descripcion: "Construida junto a un lago, con acceso privado y muelle.", ubicacion: "algarrobo", habitaciones: 3, costo: 240000000, smoke: false, pets: true }
];

const arriendos = [
  { nombre: "Casa Elegante", src: "https://images.freeimages.com/images/large-previews/3db/at-home-1231024.jpg", descripcion: "Elegante residencia con acabados de lujo y detalles sofisticados.", ubicacion: "quintero", habitaciones: 3, costo: 210000, smoke: true, pets: true },
  { nombre: "Casa Rodante", src: "https://media.istockphoto.com/id/1318264210/es/foto/moderno-interior-de-sal%C3%B3n-con-dos-sillones-y-estanter%C3%ADa-nicho-arco-c%C3%B3modo-l%C3%A1mpara-leer-y.jpg?s=1024x1024&w=is&k=20&c=N5dMNhRDpDrURkCbl-l_HhgcYjGhpVw86_zH3qozt7w=", descripcion: "Encantadora casa con ambiente cálido y chimenea.", ubicacion: "melipilla", habitaciones: 1, costo: 250000, smoke: false, pets: true },
  { nombre: "Casa del Sol", src: "https://media.istockphoto.com/id/1164176685/es/foto/interior-blanco-del-comedor-con-estantes.jpg?s=1024x1024&w=is&k=20&c=9wTYzlip_RxmUfehtZ1wwXAvvrN3Z2QIFj7h-f5DBR0=", descripcion: "Luminosa casa con grandes ventanales y terraza.", ubicacion: "padre hurtado", habitaciones: 5, costo: 300000, smoke: true, pets: false },
  { nombre: "Casa Tranquila", src: "https://media.istockphoto.com/id/1221453173/es/foto/interior-de-comedor-blanco-con-armario.jpg?s=1024x1024&w=is&k=20&c=c_VtH2GzTHQnlggofn_gTnxjiKWECP3pEoiTb1M3ypU=", descripcion: "Tranquila casa en una zona residencial, ideal para la familia.", ubicacion: "san antonio", habitaciones: 3, costo: 180000, smoke: false, pets: false },
  { nombre: "Casa Moderna", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", ubicacion: "cartagena", habitaciones: 4, costo: 280000, smoke: true, pets: true },
  { nombre: "Casa del Bosque", src: "https://media.istockphoto.com/id/1203800049/es/foto/esquina-gris-de-oficina-de-espacio-abierto-y-sala-de-reuniones.jpg?s=1024x1024&w=is&k=20&c=g0i7NAH9JK_QHsq6AiYYKshIFnXNuXQFMn4yitwHuCg=", descripcion: "Ubicada en medio de la naturaleza, rodeada de árboles y senderos.", ubicacion: "casa blanca", habitaciones: 3, costo: 220000, smoke: false, pets: true },
  { nombre: "Casa Bella", src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg", descripcion: "Amplia casa con hermoso jardín y vista panorámica.", ubicacion: "santiago", habitaciones: 3, costo: 200000, smoke: true, pets: false },
  { nombre: "Casa del Lago", src: "https://media.istockphoto.com/id/1560744923/es/foto/casas-adosadas-modernas-con-elementos-de-pared-de-madera.jpg?s=1024x1024&w=is&k=20&c=DyZdVGd8fwDBoPsKrgsEKB9RGrDd7TS2It-zGz5L4Ps=", descripcion: "Construida junto a un lago, con acceso privado y muelle.", ubicacion: "algarrobo", habitaciones: 3, costo: 240000, smoke: false, pets: true }
];

const separarPorPuntos = (numero) => {
  return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};


const casaContainer = document.querySelector('#contenedor');
const casaVenta = document.querySelector('#contenedor_1');
const casaArriendo = document.querySelector('#contenedor_2');

const mostrarCasas = (casas, limite, tipo) => {

  let contenedor;

  if (tipo === 'venta') {
    contenedor = casaVenta;
  } else if (tipo === 'arriendo') {
    contenedor = casaArriendo;
  } else {
    contenedor = casaContainer;
  }

  for (let i = 0; i < limite && i < casas.length; i++) {
    const casa = casas[i];
    const template = `
        <div class="card">
        <img src="${casa.src}" class="card-img-top" alt="${casa.nombre}" />
        <div class="card-body">
          <h5 class="card-title">${casa.nombre}</h5>
          <p class="card-text">
          ${casa.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${casa.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${casa.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> 1 Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i>${separarPorPuntos(casa.costo)}</p>
          ${casa.smoke
        ? '<p class="text-success"><i class="fas fa-smoking"></i> Se permiten fumar</p>'
        : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permiten fumar</p>'}
          ${casa.pets
        ? '<p class="text-success"><i class="fas fa-paw"></i> Se permiten animales</p>'
        : '<p class="text-danger"><i class="fas fa-paw"></i> No se permiten animales</p>'}
          </p>
        </div>
      </div>
        
        `;
    contenedor.innerHTML += template;
  }
};


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id'); // Obtén el parámetro 'mode' de la URL

if (id === '1') {
  // Mostrar todas las casas en la página de venta
  mostrarCasas(ventas, ventas.length);
} else if (id === '2') {
  // Mostrar todas las casas en la página de arriendo
  mostrarCasas(arriendos, arriendos.length);
} else {
  mostrarCasas(ventas, 3, 'venta');
  mostrarCasas(arriendos, 3, 'arriendo');
}


