import Button from "./Button";
import styles from "./Practice.module.css";
import { useState, useEffect } from "react";


function Hello() {
    // cleanup
    useEffect(() => {
        console.log("created :)");
        return () => console.log("bye :(");
    }, []);
    return <h3>Hello</h3>
}


function App() {

    // [UseEffect]
    const [counter, setCount] = useState(0);
    const [keyword, setKeyword] = useState("")
    const onClick = () => setCount((current) => current + 1);
    const onChange = (event) => setKeyword(event.target.value);
    
    useEffect(() => {   // useEffect 를 사용해면, 해당 함수는 최초 한번만 실행된다.
        console.log("I run only once");
    }, []);

    useEffect(() => {  // keyword에 입력한 값이 변화될 떄만 render되도록 함.
        if (keyword !== "" & keyword.length > 5) {
            console.log("I run when 'keyword' changes.")
        }  
    }, [keyword]);

    useEffect(() => {   // counter에 입력한 값이 변화될 떄만 render되도록 함.
        console.log("I run when 'counter' changes.");
    }, [counter]);

    useEffect(() => {   // keyword & counter에 입력한 값이 변화될 떄만 render되도록 함.
        console.log("I run when 'keyword & counter' changes.");
    }, [keyword, counter]);  

    
    // [cleanUp]
    const [showing, setShowing] = useState(false);
    const onClickShow = () => setShowing((current) => !current);

    return (
        <div className="App">
            <h1>cleanUp</h1>
            {showing ? <Hello /> : null}
            <div>
                <button onClick={onClickShow}>{showing ? "Hide" : "Show"}</button>
            </div>

            <br/><br/>
            <h1>useEffect</h1>
            <input type="text" placeholder="Search here..." value = {keyword} onChange={onChange}/>
            <h5>{counter}</h5>
            <button onClick={onClick}>click me</button>

            <br/><br/>
            <h1>style Test</h1>
            <h1 className={styles.title}>Welcome back!!!!</h1>
            <Button text={"Confirm"} />
        </div>
    );
}

export default App;
