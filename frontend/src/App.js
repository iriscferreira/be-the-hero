import React from 'react';

import './global.css';

import Routes from './routes';

function App(){
    return(
        <Routes />
    );
    // const [counter, setCounter] = useState(0);

    // function increment(){
    //     setCounter(counter + 1);
    //     console.log(counter)
    // }

    // return(
    //     <div>
    //     <Header> Contador: {counter}</Header>
    //     <button onClick= {increment}>Incrementar</button>
    //     </div>
    // );
}

export default App;