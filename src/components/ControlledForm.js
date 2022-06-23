import {useState} from "react";

const ControlledForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleChange = ({ target: { value, name } }) => {
        switch (name) {
            case "username": {
                setUsername(value);
                break;
            }
            case "password": {
                setPassword(value);
                break;
            }
            case "confirm password": {
                setConfirmPassword(value);
                break;
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === confirmPassword){

            console.log("Username", username);
            console.log("password", password);
            console.log("confirm password", confirmPassword);

            return true;
        }else {
            alert("Passwords do not match")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:{" "}
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Password:{" "}
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Confirm password:{" "}
                <input
                    type="password"
                    name="confirm password"
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                />
            </label>

            <button type="submit">Submit</button>
        </form>
    );
}

export default ControlledForm;