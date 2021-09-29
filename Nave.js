class Nave{
	p;
	vidas;
	const controles; 
	
	constructor(){
		this.vidas = vidas;
		this.posicao = p;
		this.controles = controles;
	}
	
	Movimentar(){
		// Vai aumentar ou diminuir o valor de p sobre outros valores que serão calculados quando o
		// jogador usar os atributos de "controles" e depois retorna
		return p;
	}
	
	Atirar(){
		// Vai criar um objeto da classe "Projetil", 
		// onde sua posição x e y vão ser as mesmas do jogador, e a direção vai ser para cima.
	}
	
	PerdeVida(){
		// Se a nave receber um projetil inimigo ele perde uma vida.
		// entao colidir com um projetil inimigo vidas -= 1
		return vidas;
	}
	
	VerificaColisao(){
		//verifica se a nav colide com a parede. 
		//se colidir impede de ir para a direção escolhida.
	}
}