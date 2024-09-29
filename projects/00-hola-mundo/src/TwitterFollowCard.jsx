import { useState } from "react";

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    const textFollowing = isFollowing ? 'Siguiendo' : 'Seguir';
    const btnClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';


    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt="Avatar" />
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-infoUserName'>
                        {children}
                    </strong>
                    {/* <span>{formatUserName(userName)}</span> */}
                    <span>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={btnClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{textFollowing}</span>
                    <span className="tw-followCard-stopFollow">Deja de Seguir</span>
                </button>
            </aside>
        </article>
    )
}