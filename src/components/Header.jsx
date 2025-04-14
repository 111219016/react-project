import { Link } from "react-router"

function Header() {
    return (
        <header className="header w-full h-25 bg-[#ce342c] flex items-center">
            <Link to="/">
                <img src="/images/logo.svg" className="h-1/2 ml-6" />
            </Link>
        </header>
        
    );
}

export default Header;