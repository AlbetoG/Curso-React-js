import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    // const format = userName => `@${userName}`;


    const users = [
        {
            userName: "Alberto",
            name: "AlbertoG",
            isFollowing: false
        },
        {
            userName: "midudev",
            name: "Miguel Angel",
            isFollowing: true
        }
    ]

    return (
        <section className='App'>
            {
                users.map((user) => {
                    const { userName, isFollowing, name } = user;
                    return (
                        <TwitterFollowCard
                            key={userName}
                            // formatUserName={format}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    );
                })
            }

        </section>
    )
}