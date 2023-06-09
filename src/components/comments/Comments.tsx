import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comments.module.css';
import { Avatar } from '../avatar/Avatar';
import { useState } from 'react';

type DeleteCommentFunction = (content: string) => void;
interface Props {
    content: string;
    onDeleteComment: DeleteCommentFunction;
}

export function Comments({content, onDeleteComment}: Props) {
    const [likesCount, setLikesCount] = useState<number>(0)
    const handleDeleteComment = () => {
        onDeleteComment(content);
    }

    const handleLikeComment = () => {
        setLikesCount(likesCount + 1)
    }
    return (
       <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/118015999?v=4" />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Vinicius Vieira</strong>
                        <time title='03 de Junho às 13:00h' dateTime='2023-06-03 13:00:00'>Cerca de 1h atrás</time>
                    </div>
                        <button title='Deletar comentário' onClick={handleDeleteComment}><Trash size={ 24 } /></button>
                </header>
                <p>{content}</p>
            </div>
            <footer>
            <button onClick={handleLikeComment}>
                 <ThumbsUp />
                 Aplaudir <span>{likesCount}</span>
            </button>
            </footer>
        </div>
       </div>
    )
}