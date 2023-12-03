import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

const App = ({ name }) => {
    return (
        <BrowserRouter>
            <header>
            <h1>{name}</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/react-first">React First</Link>
                    </li>
                    <li>
                        <Link to="/react-router">Router</Link>
                    </li>
                </ul>
            </nav>
            </header>
        </BrowserRouter>
    )
}

export default App
