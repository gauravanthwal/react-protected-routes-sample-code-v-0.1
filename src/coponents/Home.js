import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>This is Home Route</h2>
            <p>You can see <Link to='/products'>Products </Link> and <Link to='/feeds'>Feeds </Link>  Feeds page after login</p>
            <ol>
                <li><p>Products and Feeds page are protected</p></li>
            </ol>
        </div>
    )
}

export default Home
