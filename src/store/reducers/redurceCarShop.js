const ESTADO_INICIAL = {
    roupa:{},
    feed:[
        {
            id:1,
            categoria:"Blusa",
            cor:"Preta",
            tamanho:"M",
            preco:"50,00"
        },
        {
            id:2,
            categoria:"Vestido",
            cor:"Branco",
            tamanho:"G",
            preco:"60,00"
        },
        {
            id:3,
            categoria:"Calça",
            cor:"Jeans",
            tamanho:"38",
            preco:"100,00"
        },
    ],
};
export default function roupas(state=ESTADO_INICIAL,action){
    console.log(action)
   if(action.type === "ADICIONAR_CARRINHO"){
       return{
     ...state,
     roupa:action.roupas,
    };
 }
   return state;
}