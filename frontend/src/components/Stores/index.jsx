import React from 'react';
const OurStores = () => {
    return (
        <>
        <div className="row">
            <div className="col-4">
                <div className="card border-light mb-3">
                <div className="card-header">Rio de Janeiro</div>
                    <div className="card-body">
                        <h5 className="card-title">Avenida Presidente Vargas, 500</h5>
                        <p className="card-text">10º andar</p>
                        <p className="card-text">Centro</p>
                        <p className="card-text">(21) 3333-3333</p>
                    </div>
                </div>
            </div>

            <div className="col-4">
                <div className="card border-light mb-3">
                <div className="card-header">São Paulo</div>
                    <div className="card-body">
                        <h5 className="card-title">Avenida Paulista, 389</h5>
                        <p className="card-text">3º andar</p>
                        <p className="card-text">Jardins</p>
                        <p className="card-text">(21) 4444-4444</p>
                    </div>
                </div>
            </div>

            <div className="col-4">
                <div className="card border-light mb-3">
                <div className="card-header">Guarulhos</div>
                    <div className="card-body">
                        <h5 className="card-title">Avenida Paulo Faccini, 168</h5>
                        <p className="card-text">6º andar</p>
                        <p className="card-text">Centro</p>
                        <p className="card-text">(21) 3333-7777</p>
                    </div>
                </div>
            </div>
        </div>
        </>
        )
}

export default OurStores;