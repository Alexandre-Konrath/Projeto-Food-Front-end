import { useState, useEffect } from "react";

import api from "../../services/api.js";
import ProdutoVitrine from "../../components/produtoVitrine/produtoVitrine.jsx";
import Navbar from "../../components/navbar/navbar.jsx";

function Home(){

	const [ produtos, setProdutos ] = useState([])

  useEffect(() => {
    api.get("/produtos")
      .then((resp) => {
        setProdutos(resp.data);
      })
      .catch((err) => {
        alert('Erro ao carregar produtos');
      })
  }, []);

    return (
			<>
			<Navbar showMenu />

			<div className="container">
				<div className="titulo text-center">
					<h1>Nosso Cardápio</h1>
					<p className="subtitulo">Clique em adicionar para colocar os produtos na sacola de compras. Se preferir, você pode pedir pelo WhatsApp: (48) 99173-2972</p>
				</div>
			</div>

			<div className="text-center">
				{produtos.map(function(prod){
					return (
						<ProdutoVitrine
							key={prod.id_produto}
							id={prod.id_produto}
							nome={prod.nome}
							descricao={prod.descricao}
							preco={prod.preco}
							foto={prod.foto}
						/>
					)
				})}
			</div>
    </>
	)
}

export default Home;
