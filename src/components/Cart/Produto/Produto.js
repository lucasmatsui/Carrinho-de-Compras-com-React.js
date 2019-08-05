import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSS from './style.css';

export class Produto extends Component {
	render() {
		
		return (
			<div class={this.props.estoque <= 0 ? 'boxProduct disabled' : 'boxProduct'}>
				<h1>{this.props.nome}</h1>
				<h3>Estoque: {this.props.estoque}</h3><br/><br/>
				<span>R$ {this.props.preco}</span><br/>

				<button onClick={()=>{
					this.props.addCart(this.props.id)
				}}>Adicionar ao Carrinho</button>

			</div>
		);
	}

}