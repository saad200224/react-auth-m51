import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {

    const authInfo = useContext(AuthContext)
    console.log(authInfo)

    return (
        <div>
            <h2 className="3xl">This is home for : {authInfo.name}</h2>
        </div>
    );
};

export default Home;