import style from './Avatar.module.css';

interface AvatarProps {
    src: string;
    hasBorder?: boolean;
}

export function Avatar({hasBorder = true, src}: AvatarProps) {
    return(
        <img src={ src }
        className={hasBorder ? style.avatarWithBorder : style.avatar}
         />
    )
}