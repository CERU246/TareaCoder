const tecnoProductos = [
    {
        producto: "Notebook Lenovo", 
        precio: 899999,
        img: "images/Notebook.jpg",
        estado: "Disponible"
    },
    {
        producto: "Mouse",
        precio: 29999,
        img: "images/mouse.jpg",
        estado: "Disponible"
    },
    {
        producto: "Iphone X",
        precio: 2999999,
        img: "images/iphone.jpg" ,
        estado: "Disponible"
    },
    {
        producto: "Auriculares JBL",
        precio: 149999,
        img: "images/auriculares.jpg",
        estado:"sin stock"
    },
    {
        producto: "Cámara Canon",
        precio: 7999,
        img:"images/camara.jpg",
        estado:"Disponible"
    }
]

let productosConDescuento = tecnoProductos.map(el => {

return {
product: el.producto,
cost: el.precio,
precioConDescuento: el.precio * 0.60,
status: el.estado, 
}

});

console.table(tecnoProductos);
console.table(productosConDescuento);

const productoCaja = document.getElementsByClassName("caja-de-productos");

function productoCajaTecnologico(productos) {

    Array.from(productoCaja).forEach(caja => {
        productos.forEach(producto => {
            const cartaTecnologica = document.createElement("div");
            cartaTecnologica.classList = "elemento-usado";
            cartaTecnologica.innerHTML = `
                <img src="${producto.img}" alt="${producto.producto}" />
                <h3>${producto.producto}</h3>
                <p>Precio: $${producto.precio}</p>
                <p>Estado: ${producto.estado}</p>
                <button> Agregar Producto </button>
            `;
            caja.appendChild(cartaTecnologica);
        });
    });

}

productoCajaTecnologico(tecnoProductos); 

const carroDeCompras = [];

function agregarCarro(producto) {

    const existe = carroDeCompras.some(item => item.producto === producto.producto);

    if (!existe) {
        carroDeCompras.push(tecnoProductos);
        localStorage.setItem(JSON.parse("tecnoProductos", JSON.stringify(carroDeCompras)));
        console.log(`${producto.producto} agregado al carrito.`);
    } else {
        console.log(`${producto.producto} ya está en el carrito.`);
    }
    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    const contador = document.getElementById("carritocompra");
    contador.textContent = carroDeCompras.length;
}

actualizarContadorCarrito();


// function actualizarContadorCarrito() {
// const contador = document.getElementById("carritocompra");
// contador.textContent = carroDeCompras.length;
// }

// actualizarContadorCarrito();