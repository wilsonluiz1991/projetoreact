import React, { useState, useEffect } from 'react';

const Productlist = () => {
    
    const [produtos, setProdutos] = useState([]);

    useEffect(async() => {
        const API = "http://localhost/fseletro/backend/produtos.php";
        const res = await fetch(API);
        setProdutos(await res.json());
    }, [])
    
    return (
        <>
            {produtos.map (item => {
                return(
                    <div key={item.idprodutos} id={item.Categoria} className="card col-sm-12 col-md-6 col-lg-3 border-light box-item">
                        <img src={item.imagem} className="card-img-top img-thumbnail"/>
                        <div className="card-body">
                            <h5 className="card-title">{item.descricao}</h5>
                            <p className="card-text text-danger"><strike>R$ {item.preco}</strike></p>
                            <p className="card-text">R$ {item.preco_venda}</p>
                        </div>
                    </div>
                )
            })}      
        </>         
    )
}

export default Productlist;