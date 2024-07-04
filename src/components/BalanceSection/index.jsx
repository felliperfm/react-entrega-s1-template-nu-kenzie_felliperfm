import styles from "./style.module.scss";

export const BalanceSection = ({ entries }) => {
    const calculateTotalBalance = (entries) => {
        const total = entries.reduce((sum, entry) => {
            const value = parseFloat(entry.entryValue);
            return entry.entryType === "entrada" ? sum + value : sum - value;
        }, 0);
        return total;
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(value);
    };

    const totalBalance = calculateTotalBalance(entries);

    return (
        <>
            {entries.length === 0 ? null : (
                <section className="container">
                    <div className={styles.balanceBox}>
                        <div>
                            <h3 className="title3">Valor total:</h3>
                            <p className="text-sm light">O valor se refere ao saldo</p>
                        </div>
                        <h3 className="title3 pink">{formatCurrency(totalBalance)}</h3>
                    </div>
                </section>
            )
            }
        </>
    );
};
