import React, { useEffect } from 'react'

const Home = () => {

    // scrolling header functionality
    let lastScroll = 0
    const handleScroll = () => {
        let scroll = window.scrollY; 
        let header = document.querySelector('header')
        if(scroll > lastScroll){
            header.style.top = '-80px'
        }
        else{
            header.style.top = '0px'
        }
        lastScroll = scroll
    };
    window.addEventListener("scroll", handleScroll);
    
    return (
    <>
        <section className='view_1'>
            <div className="view_1_leaf">
                <img src="src\assets\leaf.png" alt="leaf" />
            </div>
            <div className="view_1_content">
                <h1>simple and tasty recipes</h1>
                <div className="view_1_content_bottom">
                    <h4>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, iste nesciunt? Non nostrum laborum, sed blanditiis obcaecati provident cum doloribus.lorem Non nostrum laborum, sed blanditiis obcaecati provident cum doloribus.
                    </h4>
                    <div className="getstarted">GET STARTED</div>
                </div>
            </div>
            <div className="view_1_fruit">
                <img src="src\assets\fruit.jfif" alt="" />
            </div>
        </section>

        <section className='view_3'>
            <h2>our services</h2>
            <div className="view_3_services">
                <div className="services_left">
                    <div className="service">
                        <div className="service_logo">
                            <img src="src\assets\knife.png" alt="" />
                        </div>
                        <div className="service_content">
                            <h3>quality food</h3>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et non deserunt ut repudiandae ipsum quia iste?</h5>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service_logo">
                            <img src="src\assets\knife.png" alt="" />
                        </div>
                        <div className="service_content">
                            <h3>quality food</h3>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et non deserunt ut repudiandae ipsum quia iste?</h5>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service_logo">
                            <img src="src\assets\knife.png" alt="" />
                        </div>
                        <div className="service_content">
                            <h3>quality food</h3>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et non deserunt ut repudiandae ipsum quia iste?</h5>
                        </div>
                    </div>
                </div>
                <div className="services_right">
                    <div className="service">
                        <div className="service_logo">
                            <img src="src\assets\knife.png" alt="" />
                        </div>
                        <div className="service_content">
                            <h3>quality food</h3>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et non deserunt ut repudiandae ipsum quia iste?</h5>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service_logo">
                            <img src="src\assets\knife.png" alt="" />
                        </div>
                        <div className="service_content">
                            <h3>quality food</h3>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et non deserunt ut repudiandae ipsum quia iste?</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Home