import { Avatar } from '../avatar/Avatar';
import { Comments } from '../comments/Comments';
import style from './Post.module.css';
import { Author, ContentParagraph, ContentLink } from './../../type';
import { useState } from 'react';

interface PostsProps {
  author: Author;
  content: (ContentParagraph | ContentLink)[];
  publishedAt: Date;
}

type CommentType = {
  id: number;
  content: string; 
  author: string;
  createdAt: Date;
};

export function Post({ author, publishedAt, content }: PostsProps) {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [newCommentText, setNewCommentText] = useState<string>('');

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
    const newComment: CommentType = {
      id: comments.length + 1, // gera um novo ID para o comentário
      content: newCommentText,
      author: 'Nome do Autor', // substitua pelo nome real do autor
      createdAt: new Date(),
    };
    setComments([...comments, newComment]);
    event?.target.setCustomValidity('')
    setNewCommentText('');
  };

  const handleCommentInvalid = () => {
    event?.target.setCustomValidity('Esse campo é obrigatório')
  }

  const deleteComment = (comment: CommentType): void => {
    const removeComment = comments.filter((c) => c.id !== comment.id);
    setComments(removeComment);
  };

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={author.avatar} />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={formattedPublishedAt}
          dateTime={publishedAt.toISOString()}
        >
          {`Publicado em ${formattedPublishedAt}`}
        </time>
      </header>
      <div className={style.content}>
        {content.map((conteudo, index) => {
          if (conteudo.type === 'paragraph') {
            return <p key={index}>{conteudo.content}</p>;
          } else if (conteudo.type === 'link') {
            return (
              <p key={index}>
                <a href=''>{conteudo.content}</a>
              </p>
            );
          }
          return null;
        })}
      </div>
      <form className={style.commentForm} onSubmit={handleSubmit}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe seu comentário"
          name="comment"
          value={newCommentText}
          onChange={handleNewComment}
          onInvalid={handleCommentInvalid}
          required
        />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={style.commentsList}>
        {comments.map((comment) => (
          <Comments
            key={comment.id}
            onDeleteComment={() => deleteComment(comment)}
            content={comment.content}
          />
        ))}
      </div>
    </article>
  );
}
