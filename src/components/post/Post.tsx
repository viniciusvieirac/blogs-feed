import { Avatar } from '../avatar/Avatar'
import { Comments } from '../comments/Comments'
import style from './Post.module.css'
import { Author, ContentParagraph, ContentLink } from './../../type';
import { useState } from 'react';


interface PostsProps {
    author: Author;
    content: (ContentParagraph | ContentLink)[];
    publishedAt: Date;
}

export function Post({author, publishedAt, content}: PostsProps){
    const [comments, setComments] = useState<string[]>([])
    const [newCommentText, setNewCommentText] = useState<string>('')


    const formattedPublishedAt = publishedAt.toLocaleString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      const handleNewComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewCommentText(event.target.value);
      };
    
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
      };
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                <Avatar src={author.avatar} />
                     <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                     </div>
                </div>
                <time title='03 de Junho às 13:00h' dateTime='2023-06-03 13:00:00'>{ `Publicado em ${formattedPublishedAt}` }</time>
            </header>
            <div className={style.content}>
                {content.map((conteudo) => {
                    if(conteudo.type === 'paragraph'){
                        return <p key={conteudo.content}>{conteudo.content}</p>
                    } else if (conteudo.type === 'link'){
                        return <p key={conteudo.content}><a href=""> {conteudo.content}</a></p>
                    }
                })}
            </div>
            <form className={style.commentForm} onSubmit={handleSubmit}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe seu comentário'
                    name='comment'
                    value={newCommentText}
                    onChange={handleNewComment}
                 />
               
                    <footer>
                    <button type="submit">Comentar</button>
                    </footer>
            </form>
            <div className={style.commentsList}>
                    {comments.map((comment) => <Comments content={comment} />)}
            </div>
        </article>
    )
}