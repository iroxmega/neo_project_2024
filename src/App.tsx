import { FC } from "react";

import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home.tsx";
import { Cart } from "./pages/Cart.tsx";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";

import styles from "./scss/styles.module.scss";

export const App: FC = () => {
    return (
        <>
            <div className={styles.root}>
                <Header />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/cart"} element={<Cart />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
};
