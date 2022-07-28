import cardapio from "./itens.json";
import Item from "./Item";
import styles from "./Itens.module.scss";

export default function Itens() {
  return (
    <div>
      {cardapio.map((item) => (
        <div className={styles.itens}>{<Item key={item.id} />}</div>
      ))}
    </div>
  );
}
