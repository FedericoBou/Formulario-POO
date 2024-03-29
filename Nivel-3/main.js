
class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Producto</strong>: ${product.name} -
                <strong>Precio</strong>: ${product.price} -
                <strong>Año</strong>: ${product.year}
                <a href="#" class="btn btn-danger ml-2" name= "delete">Borrar</a>
            </div>
        </div>
        `;
    productList.appendChild(element);
  }

  resetForm(){
    document.getElementById('product-form').reset();
  }
    deleteProduct(element) {
       if(element.name === 'delete') {
           element.parentElement.parentElement.parentElement.remove();
           this.showMessage('Producto Eliminado', 'danger');
       }
    }
    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 2000);
    }
}

//EVENTOS
document.getElementById("product-form").addEventListener("submit", (e) => {
    e.preventDefault(); 

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const year = document.getElementById("year").value;

    const product = new Product(name, price, year);

    const ui = new UI();
    if(name === '' || price === '' || year === ''){
       return ui.showMessage('Faltan Rellenar Campos', 'info');
    }
    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage('Producto Agregado', 'success');

    e.preventDefault(); 
  });

document.getElementById('product-list').addEventListener('click', function (e){
    const ui = new UI();
    ui.deleteProduct(e.target);
})