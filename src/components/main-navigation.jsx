import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from "./nav.module.css"

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.list}>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? classes.active : undefined}
                    end
                >
                    Home
                </NavLink>
                <NavLink
                    to="/products"
                    className={({ isActive }) => isActive ? classes.active : undefined}>
                    Products
                </NavLink>
            </nav>
        </header>
    )
}

export default MainNavigation