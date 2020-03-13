import React from 'react';
import { Link } from 'gatsby';
import './news-categories.scss';
 
const NewsCategories = () => {
    return (
        <div className="container news-categories">
            <span className="news-categories__title">Browse By Category:</span>
            <ul className="news-categories__ul">
                <li className="news-categories__li">
                    <Link to="/news/news">
                        News
                    </Link>
                </li>
                <li className="news-categories__li">
                    <Link to="/news/press">
                        Press
                    </Link>
                </li>
                <li className="news-categories__li">
                    <Link to="/news/awards">
                        Awards
                    </Link>
                </li>
                <li className="news-categories__li">
                    <Link to="/news/event">
                        Event
                    </Link>
                </li>
                <li className="news-categories__li">
                    <Link to="/news/story">
                        Story
                    </Link>
                </li>
            </ul>
        </div>
    )
}
 
export default NewsCategories;