const Categorias = ({numCategoriaSelecionada, setNumCategoriaSelecionada}) => {

  return (
    <div ClassName="categorias">

        <p ClassName={"categoria" + (numCategoriaSelecionada === 0 ? "categoria--selecionada" : "" )} 
        onClick={() => setNumCategoriaSelecionada(0)}>Pratos Principais</p>

        <p ClassName={"categorias" + (numCategoriaSelecionada === 1 ? "categoria--selecionada" : "" )} 
        onClick={() => setNumCategoriaSelecionada(1)}>Sobremesas</p>

        <p ClassName={"categorias" + (numCategoriaSelecionada === 2 ? "categoria--selecionada" : "" )} 
        onClick={() => setNumCategoriaSelecionada(2)}>Bebidas</p>

      </div> 
  )
}

export default Categorias;

//function
//arrow function