import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";


const Home = () => {
    const authInfo = useContext(AuthContext)
    return (
        <div>
            <div className="text-3xl">This is Home: {authInfo.name}</div>
        </div>
    );
};

export default Home;