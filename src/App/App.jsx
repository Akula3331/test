import { Route, Routes } from "react-router";
import cls from "./App.module.scss";
import { useState } from "react";
import MainPage from "../pages/MainPage/MainPage";
import TimeCon from "../components/TimeCon/TimeCon";

function App() {
    
    return (
        <div>
            {/* <header className={cls.header}>
                <nav className={cls.navbar}>
                    <Link to="/">Main</Link>
                    <Link to="/profile">Profile</Link>
                </nav>
            </header> */}
            <div className={cls.App}>
              <MainPage/>
            </div>
        </div>
    );
}

export default App;
