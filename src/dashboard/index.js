import { Navbar, Sidebar, Footer } from '../components'

import { HomePage } from './home'
import { SecurityPage } from './cameras'
import { FitnessPage } from './fitness'
import { useEffect, useState } from 'react'

const Dashboard = () => {
    const [Page, setPage] = useState(null)

    useEffect(function () {
        const params = new URLSearchParams(window.location.search)

        const page = params.get('page')

        if (page) {
            setPage(page)
        }
    }, [])

    return (
        <div>
            <Navbar
                height='8vh'
            />

            <div style={{ display: 'flex' }}>
                <Sidebar height='92vh' width='8vh' page={[Page, setPage]} />

                <div style={{ width: '100%' }}>
                    <div style={{ height: '86vh' }}>
                        <div style={{ padding: '15px' }}>
                            {Page == 'security' ? (
                                <SecurityPage />
                            ) : Page == 'fitness' ? (
                                <FitnessPage />
                            ) : (
                                <HomePage />
                            )}
                        </div>
                    </div>

                    <Footer height='6vh' />
                </div>
            </div>
        </div>
    )
}

export default Dashboard