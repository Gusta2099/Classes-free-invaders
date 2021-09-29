class Inimigo{
	
	const pontosPegos;
	posicaoY;
	posicaoX
	velocidade;
	colidir;
	
	constructor(){
		this.posicaoY = posicaoY;
		this.posicaoX = posicaoX;
		this.pontosPegos = pontosPegos;
		this.velocidade = velocidade;
		this.colidiu = colidiu;
	}
	
	VerificarColisao(){
		//verifica a colisao do inimigo
		return colidiu;
	}
	
	IrProLado(){
		//movimenta o inimigo para o lado
		//se o inimigo colidir ele muda a direção.
		return posicaoX;
	}
	
	Atirar(){
		//cria um projetil
	}
	
	VelocidadeTotal(){
		//toda vez que colidir for true a velocidade aumenta
		return velocidade;
	}
	
	IrParaBaixo(){
		//quando colide na parede ele desce para baixo uma vez
		return posicaoY
	}
	
	Morrer(){
		//destroi o inimigo
	}
		
}