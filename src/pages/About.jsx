const About = () => {
    return (
        <div className="about-page">
            <div className="container">
            <h1 className="title">About Us</h1>
            <p className="intro">
                Welcome to <span className="brand">TastyBites</span> – your go-to recipe hub!
            </p>

            <section className="section">
                <h2 className="section-title">Our Mission</h2>
                <p className="section-text">
                At TastyBites, we believe cooking should be fun, creative, and accessible to all.
                Whether you're a beginner or a pro, our curated recipes and guides are here to help you
                cook with confidence.
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">Why TastyBites?</h2>
                <ul className="benefits">
                <li>🍽️ Easy-to-follow recipes</li>
                <li>🌍 Diverse cuisines</li>
                <li>🧑‍🍳 Community-driven content</li>
                <li>📷 Upload your own recipes with images</li>
                </ul>
            </section>

            <p className="closing">
                Join us and explore the joy of cooking, one recipe at a time!
            </p>
            </div>
        </div>
    );
}

export default About