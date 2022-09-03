import React from "react";
import { Welcome01 } from "./Welcome01";
import Welcome02 from "./Welcome02";
import { Welcome03 } from "./Welcome03";
import { Welcome04 } from "./Welcome04";

const data = {
    name: "Mike",
    id: 123,
    age: 30,
};

const App = () => {
    return (
        <>
            <Welcome01 name="Sara" />
            <Welcome02 name="Cahal" />
            <Welcome03 name="Edite" />
            <Welcome04 {...data} />
        </>
    );
};

//FunctionalComponent
// function App(){return()}

//ClassComponent
// class App extends React.Component{
//     render(){
//         return()
//     }
// }

export default App;
