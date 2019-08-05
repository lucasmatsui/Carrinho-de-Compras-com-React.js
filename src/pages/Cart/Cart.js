import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import { Produto } from '../../components/Cart/Produto';

export class Cart extends Component {

	constructor(props) {
		super(props);
		this.state = {
			produtos:[
			 	{id: 1, nome:'Teste', estoque: 5, preco:100},
				{id: 2, nome:'Teste2', estoque: 10, preco:300},
				{id: 3, nome:'Teste3', estoque: 15, preco:500}
			],
			cart:[
			],
			total:0
		};
		this.addCart = this.addCart.bind(this);
	}


	addCart(id) {

		this.setState(state =>{
			const cartItems = state.cart;
			let product = this.state.produtos.find(prod => prod.id === id );
			let exist_inCart = state.cart.find(car => car.id === id );
			cartItems.forEach(item =>{
				if(product.estoque != 0){
					if(item.id === id) {
						product.estoque -= 1;
						this.state.total += product.preco;
						item.quant++;
					}
				}
				
			});
			if(!exist_inCart) {
				if(product.estoque != 0){
					product.estoque -= 1;
					this.state.total += product.preco;
					cartItems.push({...product, quant:1});
				}
			}

			console.log(this.state.total);

			return cartItems;
		})	
		
	}


	render() {
		return (
			<div>
				{this.state.produtos.map((p)=>{
					return(
						<Produto key={p.id} id={p.id} nome={p.nome} estoque={p.estoque} preco={p.preco} addCart={this.addCart} />
					);
				})}
				
				<div style={{float:'right'}}>
					{this.state.cart.map(cart=> (
					<p><b>{cart.nome}</b>(Qt:{cart.quant}) - R$ {cart.preco * cart.quant}</p>	
					))}
					<hr/>
					<h1>Total:R${this.state.total}</h1>
				</div>
				
			</div>
		);
	}

}