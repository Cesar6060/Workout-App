import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const PrivateRoute = ({ children }) => {
    const { currentUser } = useAuthContext();
    const navigate = useNavigate();

    if (!currentUser) {
        navigate("/login");
        return null;
    }

    return children;
};

export default PrivateRoute;
