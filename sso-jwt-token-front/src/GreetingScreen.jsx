import { useState } from "react";
import { getGreeting } from "./services/HelloService";

const GreetingScreen = () => {
    const [token, setToken] = useState("");
    const [greeting, setGreeting] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setToken(e.target.value);
        setErrorMessage("");
    };

    const handleClick = async () => {
        try {
            const response = await getGreeting(token);
            if (response.status === 200) {
                response.text().then(text => {
                    setGreeting(text);
                })
            } else {
                setErrorMessage("El token es incorrecto o no existe.");
                setGreeting("");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Saludo</h1>
            <input
                type="text"
                placeholder="Ingrese su token JWT"
                value={token}
                onChange={handleChange}
            />
            <button onClick={handleClick}>Obtener Saludo</button>
            {errorMessage && <p>{errorMessage}</p>}
            {greeting && <p>{greeting}</p>}
        </div>
    );
};

export default GreetingScreen;