import './Home.css';

export default function Home() {
    return (
        <div className="home-info">
            <div className="text-info">
                <h1 className="text-title">Ready - Set - Cook !</h1>
                <p className="text-intro">
                    Welcome to [Your App Name], where culinary inspiration meets convenience!
                    Explore a world of flavors, discover mouthwatering recipes, and transform your
                    home into a culinary haven.
                    <br />
                    🍽️ Explore Diverse Recipes: Dive into a vast collection of recipes spanning
                    cuisines from around the globe. From quick and easy weekday dinners to indulgent
                    weekend treats, we've got something for every palate. Start cooking, start
                    exploring, and make every meal a memorable one! 🍳🌶️🍰
                </p>
                <button className="see-recipes">Explore Recipes</button>
            </div>

            <div className="recipes-data">
                10000+
                <br />
                <p>Recipes</p>
            </div>
            <div className="presentation-imgs">
                <img
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
                    alt="food"
                    className="home-food first-img"
                />
                <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
                    alt="food"
                    className="home-food second-img"
                />
            </div>
        </div>
    );
}
