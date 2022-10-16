import { UserGreeting } from '../UserGreeting/UserGreeting';
import { GuestGreeting } from '../GuestGreeting/GuestGreeting';

export const Greeting = ({ isLoggedIn, unreadMessages }) => {
    const handleClick = ()=> {
        prompt('Test funkcija');
    }
    return (
        <div>
            
            {isLoggedIn ? <UserGreeting name={"Petrai"} onClick={handleClick} /> : <GuestGreeting />}
            {}
            {unreadMessages.length > 0 && (
                <h2>You have {unreadMessages.length} unread messages</h2>
            )}
            <button onClick={handleClick}>Test</button>
        </div>
    )
};