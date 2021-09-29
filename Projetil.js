class Projetil{
	
	direcao;
	posicaoY;
	posicaoX;
	
	constructor(direcao, posicaoY, posicaoX){
		this.direcao = direcao;
		this.posicaoY = posicaoY;
		this.posicaoX = posicaoX;
	}
	
	Movimentar(){
		// cria o objeto no X e Y, e fazendo ele ir de acordo com sua origem.
		// retorna a posicao do projetil
		return posicaoY;
	}
	
	DestruirProjetil(){
		// Se o projetil colidir ele some.
	}
	
}