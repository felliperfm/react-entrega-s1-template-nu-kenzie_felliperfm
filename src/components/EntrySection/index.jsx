import { useState } from "react";
import styles from "./style.module.scss";

export const EntrySection = ({ addEntry }) => {

    const [entryDescription, setEntryDescription] = useState("");
    const [entryValue, setEntryValue] = useState("");
    const [entryType, setEntryType] = useState("entrada");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = { entryDescription, entryValue, entryType };
        addEntry(newEntry);
        setEntryDescription("");
        setEntryValue("");
        setEntryType(entryType);
    };

    return (
        <section className="container">
            <div className={styles.formBox}>
                <form className="formText" onSubmit={handleSubmit}>
                    <label htmlFor="description">Descrição</label>
                    <div>
                        <input
                            name="description"
                            id="description"
                            placeholder="Digite aqui sua descrição"
                            type="text"
                            className="formEntry"
                            value={entryDescription}
                            onChange={(e) => setEntryDescription(e.target.value)}
                            required
                        />
                        <span>Ex: Compra de roupas</span>
                    </div>
                    <label htmlFor="value">Valor (R$)</label>
                    <input
                        name="value"
                        id="value"
                        placeholder="1"
                        type="number"
                        className="formEntry"
                        value={entryValue}
                        onChange={(e) => setEntryValue(e.target.value)}
                        required
                    />
                    <label htmlFor="type">Tipo de valor</label>
                    <select
                        id="type"
                        name="type"
                        value={entryType}
                        className="formEntry"
                        onChange={(e) => setEntryType(e.target.value)}

                    >
                        <option value="entrada">Entrada</option>
                        <option value="saida">Saída</option>
                    </select>
                    <button className="btn" type="submit">Inserir valor</button>
                </form>
            </div>
        </section>
    );
};
