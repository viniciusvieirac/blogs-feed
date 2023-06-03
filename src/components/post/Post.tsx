import style from './Post.module.css'

export function Post(){
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img
                         src="https://avatars.githubusercontent.com/u/118015999?v=4"
                        className={style.avatar}
                     />
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
                <p><a href=""> 👉 jane.design/doctorcare</a></p>
                <p> <a href=""> #novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}