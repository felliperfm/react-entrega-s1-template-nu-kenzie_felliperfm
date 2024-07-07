import { useState } from "react";
import { BalanceSection } from "../../components/BalanceSection";
import { EntrySection } from "../../components/EntrySection";
import { SummarySection } from "../../components/SummarySection";
import { TemplatePage } from "../TemplatePage/TemplatePage";
import styles from "./style.module.scss";

export const Homepage = () => {
    const [entries, setEntries] = useState([]);

    const addEntry = (entry) => {
        setEntries([...entries, entry]);
    };

    const removeEntry = (indexToRemove) => {
        setEntries(entries.filter((_, index) => index !== indexToRemove));
    };

    return (
        <TemplatePage>
            <div className={styles.contentBox}>
                <div>
                    <EntrySection addEntry={addEntry} />
                    <BalanceSection entries={entries} />
                </div>
                <SummarySection entries={entries} removeEntry={removeEntry} />
            </div>
        </TemplatePage>
    );
};
