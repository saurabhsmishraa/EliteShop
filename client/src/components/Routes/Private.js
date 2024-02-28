import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get("/api/v1/auth/user-auth");
                if (res.data.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                    // Redirect to login if authentication fails
                    navigate("/login");
                }
            } catch (error) {
                console.error("Error checking authentication:", error);
                setOk(false);
                // Redirect to login if there's an error
                navigate("/login");
            }
        };

        if (auth?.token) {
            authCheck();
        } else {
            // Redirect to login if there's no token
            navigate("/login");
        }
    }, [auth?.token, navigate]);

    // Render the Outlet if authenticated
    // This will render the child routes of PrivateRoute
    return ok ? <Outlet /> : <Spinner />;
}
