import "./style.css";
const ItemListContainer = ({ greeting }) => {
  return (
    <div class="ContenedorSaludo">
      <div className="Saludo">
        {greeting}
      </div>
    </div>
  );
};

export default ItemListContainer;
