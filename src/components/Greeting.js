const Greeting = (props) => {
    console.log(props);
    const greetingMsg = ` ${props.name} and your age is ${props.age}`;
    return <p>Hello {greetingMsg}</p>
}

export default Greeting;