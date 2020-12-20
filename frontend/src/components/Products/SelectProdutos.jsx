import React, { useState, useEffect } from 'react';

const Selectproducts = () => {
  const [categoria, setCategoria] = useState([]);

  useEffect(async() => {
    const API = "http://localhost/fseletro/backend/produtos.php";
    const res = await fetch(API);
    setCategoria(await res.json());
  }, [])

  const categorias = categoria.map(category => {
    const container = { };
    container ['name'] = category.Categoria; //get name_category
    return container;
  });

  const categoria_final = categorias.map(JSON.stringify).reverse()
  .filter(function(item, index, arr){ return arr.indexOf(item, index + 1) === -1; })
  .reverse().map(JSON.parse);

  let box = document.getElementsByClassName('box-item');
  
  function mostrarProduto(event) {
    let item = event.target.id;
    for (let i = 0; i < box.length; i++) {
        if (item === box[i].id) {
                box[i].style.display = "block";
        }
            else{
                box[i].style.display = "none";
        }
    }
}
  
  function todos() {
    for (let i = 0; i < box.length; i++) {
        box[i].style.display = "block";
    }
  }
  
  
  return (
        <>
          <button className="dropdown-item list-group-item d-flex justify-content-between align-items-center"
                onClick={todos} type="button">
                Todas os produtos
            </button>
            {/** map for show categorys from category_simple  renderizando*/}
            {   categoria_final.map ( item => {
                    return (
                        <button key={item.name} className="dropdown-item list-group-item d-flex justify-content-between align-items-center"
                                id={item.name} onClick={mostrarProduto} type="button">
                            {item.name}
                        </button>
                    )
                })
            }
        </>
    )
}

export default Selectproducts;