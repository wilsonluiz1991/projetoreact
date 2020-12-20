import React from 'react';
import formaspagamento from '../assets/pag.jpeg'

const Footer = () => {
    return (
        <>
        
        <footer id="rodape" className="footer d-flex justify-content-center">
                <p id="formasdepagamento"><b>Formas de pagamento</b></p>
            <img width="25%" src={formaspagamento} alt="Formas de pagamento"/>
                 <p>&copy;Recode Pro</p></footer>
        </>
    )
}
export default Footer;