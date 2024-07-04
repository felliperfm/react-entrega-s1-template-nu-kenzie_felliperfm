import { EntryCard } from "./EntryCard";
import styles from "./style.module.scss";

export const SummarySection = ({ entries, removeEntry }) => {
    return (
        <section className="container">
            <div className={styles.summaryBox}>
                <h3 className="title3">Resumo financeiro</h3>
                {entries.length === 0 ? (
                    <h2 className={`${styles.emptyWarning} title2`}>Você ainda não possui nenhum lançamento</h2>
                ) : (
                    <ul className={styles.entriesList}>
                        {entries.map((entry, index) => (
                            <li key={index}>
                                <EntryCard entry={entry} removeEntry={() => removeEntry(index)} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};
