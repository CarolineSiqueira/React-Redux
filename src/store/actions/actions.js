export function toggleLesson(module, lesson) {
    return {
      //é obrigatório passar um type para action
      type: "TOGGLE_LESSON",
      //aqui é o valor recebido do botão e enviado para onde quisermos
      module,
      lesson,
    };
  }

  export function adicionarCarrinho(roupas){
    return{
      type:"ADICIONAR_CARRINHO",
      roupas,
    };
  }