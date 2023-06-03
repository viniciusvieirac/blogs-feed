import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comments.module.css';

export function Comments() {
    return (
       <div className={styles.comment}>
        <img src="https://github.com/viniciusvieirac.png" alt="" />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Vinicius Vieira</strong>
                        <time title='03 de Junho às 13:00h' dateTime='2023-06-03 13:00:00'>Cerca de 1h atrás</time>
                    </div>
                        <button title='Deletar comentário'><Trash size={ 24 } /></button>
                </header>
                <p>Muito bom Devon, Parabéns!!</p>
            </div>
            <footer>
            <button>
                 <ThumbsUp />
                 Aplaudir <span>20</span>
            </button>
            </footer>
        </div>
       </div>
    )
}