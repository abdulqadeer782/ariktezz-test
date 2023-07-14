
import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/login-page";
import Main from "./pages";
import Product from "./pages/product";
import Users from "./pages/users";
import { Provider, useSelector } from "react-redux";
import store from "./store";

function App() {
    let state = useSelector(state => state)
    console.log('s', state)
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/product"
                        element={
                            <ProtectedRoute>
                                <Product />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/users"
                        element={
                            <ProtectedRoute>
                                <Users />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Main>{children}</Main>
};

export default App;
