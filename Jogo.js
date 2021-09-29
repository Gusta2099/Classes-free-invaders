class Jogo{
	
	pontos;
	jogando;
	const xTamanho;
	const yTamanho;
	inimigosVivos;
	
	constructor(){
		this.xTamanho = xTamanho;
		this.yTamanho = yTamanho;
		this.inimigosVivos = inimigosVivos;
		this.pontos = pontos;
		this.jogando = jogando;
	}
	
	Calcular(){
		//toda vez que acertar um inimigo aumenta os pontos.
		return pontos;
	}
	
	IniciarJogo(){
		//transforma a varíavel 'jogando' para truee anima os elementos na tela.
		return jogando;
	}
	
	Desenha(){
		//cria os objetos das classes: "Nave", "Barricada" e "Inimigo".
	}
	
	FinalizarJogo(){
		//muda 'jogando' para false.
		return jogando;
	}
	
	Redefinir(){
		// apaga todos os objetos da tela e reseta as variáveis.
	}
	
	RecriaInimigos(){
		//verifica quantos inimigos vivos existem.
		//se não houver nenhum ele reespawna todos.
		//retorna a variavel para o valor original.
		return inimigosVivos;
	}
}