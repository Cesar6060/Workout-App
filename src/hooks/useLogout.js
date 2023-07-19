import { useAuthContext } from "../hooks/useAuthContext";

// Firebase imports
import { auth } from "../services/firebase/config";
import { signOut } from "firebase/auth";

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
        return signOut(auth)
            .then(() => {
                dispatch({ type: 'LOGOUT' })
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return { logout };
}
