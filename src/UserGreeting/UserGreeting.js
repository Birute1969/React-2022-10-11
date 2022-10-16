export const UserGreeting = ({name, onClick}) => {
    if (name) {
    return <h1 onClick={onClick}>Welcome Back, {name}</h1>
    }
    return <h1>Welcome back</h1>
};