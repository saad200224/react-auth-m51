import { createContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const authInfo = { name: 'nodi sagor khal bill' }

    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;