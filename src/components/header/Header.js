import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
//when link gets compiled it becomes <a> tag
//thats why teoration etc none

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLc0lBCMin3R8HC89ZPJZeGSM4yRe3RJLI2Q&usqp=CAU" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header