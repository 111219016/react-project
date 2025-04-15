import { Link } from "react-router"
import HeartSummary from "./HeartSummary"

function Header() {
    return (
        <header className="header w-full h-25 bg-[#ce342c] flex items-center">
            <Link to="/">
                <img src="/images/logo.svg" className="h-1/2 ml-6" />
            </Link>
            <HeartSummary />
        </header>
        
    );
}

export default Header;