import React from 'react';
import SelectProducts from './SelectProdutos';
import ProductList from './ProductsList';


const Pageproducts = () => {
    return(
        <>
        < main className="container row m-auto">
            <div className="col-sm-12 col-lg-3 mt-i">
            <SelectProducts/>
            </div>

            
            <div className="col-lg-9 mt-i">
              <div className="row">
              <ProductList/>
                        </div>
</div>

              
        </main>
        </>

    );
}

export default Pageproducts;