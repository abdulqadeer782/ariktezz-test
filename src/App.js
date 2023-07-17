
import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/login-page";
import Main from "./pages";
import Product from "./pages/product";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import NotFound from "./pages/404";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<NotFound />} />
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Product />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

const ProtectedRoute = ({ children }) => {
    const isAuthenticate = useSelector(state => state.users.isLoggedIn)

    if (!isAuthenticate) {
        return <Navigate to="/login" replace />;
    }

    return <Main>{children}</Main>
};

export default App;
