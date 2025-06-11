import { useRef, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";

const Home = () => {
    const targetRef = useRef(null);
    const navigate = useNavigate()

    // Scroll header hide/show functionality
    useEffect(() => {
        let lastScroll = 0;
        const handleScroll = () => {
            const scroll = window.scrollY;
            const header = document.querySelector("header");
            if (header) {
                header.style.top = scroll > lastScroll ? "-80px" : "0px";
            }
            lastScroll = scroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = () => {
        targetRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Base path for public folder in Vite
    const base = import.meta.env.BASE_URL;

    return (
        <>
            <section className="view_1">
                <div className="view_1_leaf">
                    <img src={`${base}assets/leaf.png`} alt="leaf" />
                </div>
                <div className="view_1_content">
                    <h1>simple and tasty recipes</h1>
                    <div className="view_1_content_bottom">
                        <h4>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                            iste nesciunt? Non nostrum laborum, sed blanditiis obcaecati
                            provident cum doloribus.
                        </h4>
                        <div className="getstarted" onClick={scrollToSection}>
                            GET STARTED
                        </div>
                    </div>
                </div>
                <div className="view_1_fruit">
                    <img src={`${base}assets/fruit.jfif`} alt="fruit" />
                </div>
            </section>

            <section className="view_2">
                <h2>Why Choose Us?</h2>
                <div className="view_2_features">
                    <div className="feature">
                        <img src={`${base}assets/time-saving.png`} alt="Time-saving" />
                        <h4>Time-Saving</h4>
                        <p>
                            Our recipes are quick to prepare, helping you enjoy delicious
                            meals without spending hours in the kitchen.
                        </p>
                    </div>
                    <div className="feature">
                        <img
                            src={`${base}assets/healthy-options.png`}
                            alt="Healthy Options"
                        />
                        <h4>Healthy Options</h4>
                        <p>
                            We offer a variety of nutritious recipes to support your lifestyle
                            without compromising on taste.
                        </p>
                    </div>
                    <div className="feature">
                        <img src={`${base}assets/tissues.png`} alt="Community Support" />
                        <h4>Community Support</h4>
                        <p>
                            Join a growing community of food lovers and share tips, photos,
                            and inspiration every day.
                        </p>
                    </div>
                </div>
            </section>

            <section ref={targetRef} className="view_3">
                <h2>Our Services</h2>
                <div className="view_3_services">
                    <div className="services_left">
                        <div className="service">
                            <div className="service_logo">
                                <img src={`${base}assets/quality-food.png`} alt="Quality Food" />
                            </div>
                            <div className="service_content">
                                <h3>Quality Food</h3>
                                <h5>
                                    We focus on delivering meals made from fresh, top-quality
                                    ingredients to ensure a delightful taste in every bite.
                                </h5>
                            </div>
                        </div>
                        <div className="service">
                            <div className="service_logo">
                                <img src={`${base}assets/hot-food.png`} alt="Serve Hot" />
                            </div>
                            <div className="service_content">
                                <h3>Serve Hot</h3>
                                <h5>
                                    Our food is prepared and served hot, keeping flavors intact
                                    and offering a comforting dining experience.
                                </h5>
                            </div>
                        </div>
                        <div className="service">
                            <div className="service_logo">
                                <img
                                    src={`${base}assets/ingredients.png`}
                                    alt="Ingredients"
                                />
                            </div>
                            <div className="service_content">
                                <h3>Ingredients</h3>
                                <h5>
                                    Only the finest and hand-picked ingredients are used in our
                                    recipes, ensuring nutrition and taste go hand-in-hand.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="services_right">
                        <div className="service">
                            <div className="service_logo">
                                <img src={`${base}assets/chef.png`} alt="Cook like a Chef" />
                            </div>
                            <div className="service_content">
                                <h3>Cook like a Chef</h3>
                                <h5>
                                    We guide you with techniques and tips so you can prepare
                                    dishes like a professional chef at home.
                                </h5>
                            </div>
                        </div>
                        <div className="service">
                            <div className="service_logo">
                                <img
                                    src={`${base}assets/easy-recipes.png`}
                                    alt="Easy Recipes"
                                />
                            </div>
                            <div className="service_content">
                                <h3>Easy Recipes</h3>
                                <h5>
                                    Follow our simple, step-by-step recipes that make cooking fun,
                                    quick, and easy for everyone.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer_content">
                    <h2>🍽️ RecipeApp</h2>
                    <p>Simple and tasty recipes, made with love.</p>
                    <div className="footer_links">
                        <span onClick={() => navigate("/about")}>About</span>
                        <span onClick={() => navigate("/contact")}>Contact</span>
                        <span onClick={() => {}}>Privacy</span>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                        <a href="#privacy">Privacy</a>
                    </div>
                    <p className="footer_copy">
                        &copy; {new Date().getFullYear()} RecipeApp. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Home;
