import { Avatar } from '../avatar/Avatar';
import style from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <img className={style.cover}
              src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
              alt="" />
            <div className={style.profile}>
               <Avatar src="https://avatars.githubusercontent.com/u/118015999?v=4" />
                <strong>Vinicius Vieira</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <button>
                    <PencilLine size={20} />
                    Editar seu perfil
                </button>
            </footer>
        </aside>
    )
}