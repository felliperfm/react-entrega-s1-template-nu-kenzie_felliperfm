import styles from "./style.module.scss";

export const EntryCard = ({ entry, removeEntry }) => {
    const formatCurrency = (value) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(value);
    };

    return (
        <div className={`${styles.entryCard} ${styles[entry.entryType]}`}>
            <div className={styles.cardDescription}>
                <h3 className="title3">{entry.entryDescription}</h3>
                <p className="text-sm dark">{entry.entryType}</p>
            </div>
            <div className={styles.cardValue}>
                <p className="text-sm dark">{formatCurrency(entry.entryValue)}</p>
                <button type="button" onClick={removeEntry}>Excluir</button>
            </div>
        </div>
    );
};
