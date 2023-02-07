import "./style.css";
const ItemListContainer = ({ greeting }) => {
  return (
    <div className="ContenedorSaludo">
      <div className="Saludo">
        {greeting}
      </div>
    </div>
  );
};

export default ItemListContainer;
