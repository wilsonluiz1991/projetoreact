import React, { useState, useEffect } from 'react';

const Msg = () => {
    
    const [msg, setMsg] = useState([]);
    const [render, setRender] = useState(false);
    const [alert, setAlert] = useState(false);
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    useEffect(async() => {
        const API = "http://localhost/fseletro/backend/msg.php";
        const res = await fetch(API);
        setMsg(await res.json());
    }, [render])

    function comentario(event) {
        event.preventDefault();
        let form = new FormData(event.target);
        const url = "http://localhost/fseletro/backend/enviar.php";
        fetch(url, { 
            method: "POST",
            body: form
        }).then((res) => res.json()).then(data => {
            setRender(!render);
            setAlert(data);
            setTimeout(() => {
                setAlert(false);
            }, 1000)
        })

        setNome('');
        setMensagem('');
    }
    
    return(
        <>
            <h1>Contato</h1>
            <div className="row">
                <div className="col-6">
                    <img src="./imagens/logoemail.png" width="40px"/>
                    <p>contato@fullstackeletro.com.br</p>
                </div>
                <div className="col-6">
                    <img src="./imagens/logowhats1.jpg" width="40px"/>   
                    <p>(11) 99999-9999</p>
                </div>
            </div>
            <form onSubmit={comentario}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Nome</label>
                    <input type="text" className    ="form-control" id="exampleFormControlInput1" name="nome" placeholder="Digite seu nome" value={nome} onChange={event=>setNome(event.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Digite sua mensagem</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" rows="3" value={mensagem} onChange={event=>setMensagem(event.target.value)}></textarea>
                </div>
                <button className="btn btn-primary col-xl-12">Enviar</button>
                { alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
                                Mensagem enviada!
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div> }
            </form>
            <h2>Mensagens</h2>
            {msg.map (item => {
                return(
                    <div key={item.idcomentarios} className="card border-dark mb-3">
                        <div className="card-header">{item.nome}</div>
                        <div className="card-body text-dark">
                            <h5 className="card-title">{item.data}</h5>
                            <p className="card-text">{item.msg}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Msg;
