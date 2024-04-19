const {createApp} = Vue

createApp( {
    data() {
        return {
            heroi: {vida: 100},
            vilao: {vida: 100},
            logAcoes: []
        }
    },
    methods: {
        atacar(isHeroi) {
            const alvo = isHeroi ? this.vilao : this.heroi;
            const dano = 10;
            
            alvo.vida -= dano;
            const acao = `${isHeroi ? 'Link' : 'Ganondorf'} atacou e causou ${dano} de dano.`;
            this.logAcao(acao);
            
            if (alvo.vida <= 0) {
                this.logAcao(`${isHeroi ? 'Link' : 'Ganondorf'} venceu!`);
            }
            else {
                this.acaoVilao();
            }
        },
        defender(isHeroi) {
            const personagem = isHeroi ? this.heroi : this.vilao;
            const danoReduzido = 5;
            personagem.vida -= danoReduzido;
            const acao = `${isHeroi ? 'Link' : 'Ganondorf'} defendeu e reduziu ${danoReduzido} de dano.`;
            this.logAcao(acao);
        },
        usarPocao(isHeroi) {
            const personagem = isHeroi ? this.heroi : this.vilao;
            const cura = 20;
            personagem.vida += cura;
            const acao = `${isHeroi ? 'Link' : 'Ganondorf'} usou uma poção e recuperou ${cura} de vida.`;
            this.logAcao(acao);
        },
        correr(isHeroi) {
            const acao = `${isHeroi ? 'Link' : 'Ganondorf'} decidiu correr.`;
            this.logAcao(acao);
        },
        acaoVilao() {
            const acoes = ['atacar', 'defender', 'usarPocao', 'correr', 'atacar', 'atacar'];
            const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
            this[acaoAleatoria](false);
        },
        logAcao(acao) {
            this.logAcoes.push(acao);
        }
    }
}).mount("#app");
