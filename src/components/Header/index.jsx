import Logo from "../../assets/logo.svg";
import styles from "./style.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <img src={Logo} />
            </div>
        </header>
    );
};
