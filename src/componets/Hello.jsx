function Hello(props) {
    const { testClich } = props;
    return (
        <div>
            <h2>Hello {props.name}</h2>
            <h2>Email {props.email}</h2>
            <h2>Fullname {props.fullname}</h2>
        </div>
    );
}

export default Hello;