import { Avatar } from '../avatar/Avatar'
import { Comments } from '../comments/Comments'
import style from './Post.module.css'

export function Post(){
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                <Avatar src="https://avatars.githubusercontent.com/u/118015999?v=4" />
                     <div className={style.authorInfo}>
                        <strong>Vinicius Vieira</strong>
                        <span>Web Developer</span>
                     </div>
                </div>
                <time title='03 de Junho às 13:00h' dateTime='2023-06-03 13:00:00'>Publicado há 1h</time>
            </header>
            <div className={style.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href=""> 👉 jane.design/doctorcare</a></p> {' '}
                <p>
                     <a href=""> #novoprojeto</a>{' '}
                     <a href=""> #nlw</a>{' '}
                     <a href=""> #rocketseat</a> {' '}   
                </p>
            </div>
            <form className={style.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe seu comentário' />
               
                    <footer>
                    <button type="submit">Comentar</button>
                    </footer>
            </form>
            <div className={style.commentsList}>
                <Comments />
                <Comments />
                <Comments />
            </div>
        </article>
    )
}