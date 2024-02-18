import './Header.css';

export default function Header({ fetchRecipes }) {
    return (
        <>
            <div className="header-main">
                <h1 className="app-name">LOGOGOG</h1>
                <div className="nav-btns">
                    <button className="nav-home">Home</button>
                    <button onClick={() => fetchRecipes()} className="nav-recipes">
                        Recipes
                    </button>
                    <button className="nav-contact">Contact</button>
                </div>
                <button className="nav-login">Login</button>
            </div>
        </>
    );
}
