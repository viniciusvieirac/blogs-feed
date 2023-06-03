import styles from './Header.module.css'
import simbol from './../../assets/ignite-simbol.svg'

export default function Header() {
    return (
        <header  className={styles.header}>
            <img src={simbol} alt="" />
        </header>
    );
}