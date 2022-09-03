const Welcome02 = (props) => {
    const name = props.name;
    return <h1>Hello, {name}</h1>;
    //ClassComponent
    // ...
    // render(){
    //     const name = this.props.name;
    //     return(
    //         <h1>Hello, {name}</h1>
    //     )
    // }
};

export default Welcome02;