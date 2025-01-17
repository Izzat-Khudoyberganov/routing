import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/main-navigation'

const RootLayout = () => {
    return (
        <Fragment>
            <MainNavigation />
            <main >
                <Outlet />
            </main>
        </Fragment>
    )
}

export default RootLayout