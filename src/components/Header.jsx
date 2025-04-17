import { Link } from "react-router"
import { useLike } from '@/context/LikeContext';


function Header() {
    const { totalLikes } = useLike();
    return (
        <header className="sticky top-0 left-0 header w-full h-25 bg-[#ce342c] flex items-center justify-between px-4 z-50 shadow-md">
            <Link to="/">
                <img src="/images/logo.svg" className="h-1/2 ml-6" />
            </Link>
            <div className="relative w-15 h-15 mt-2 mr-6">
                <svg
                    viewBox="0 0 24 24"
                    fill="red"
                    stroke="red"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full stroke-[#FFFBF3]"
                >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 
                   5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 
                   1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
{/* px-1 */}
                <span className="absolute -top-2 -right-4 bg-white text-pink-600 text-md font-bold badge shadow">
                    {totalLikes}
                </span>
            </div>
        </header>

    );
}

export default Header;