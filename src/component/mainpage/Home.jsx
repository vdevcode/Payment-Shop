import React from "react";
import Categories from "./Category";
import Slide from "./Slide";
import './Home.css';

const Home = () => {
    return (
        <>
            <section className='home'>
                <div className='container d_flex'>
                    <Categories />
                    <Slide/>
                </div>
            </section>
        </>
    )
}
export default Home