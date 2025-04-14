import { Link } from "react-router";

const MoreButton = ({ className = "" }) => {
    return (
      <Link to="/">
        <div
          className={`inline-block px-6 py-2 text-lg font-medium text-[#FFFBF3] bg-[#ce342c] border border-[#ce342c] cursor-pointer transition-all duration-300 hover:bg-[#FFFBF3] hover:text-[#ce342c] select-none ${className}`}
        >
          more
        </div>
      </Link>
    );
  };
  

export default MoreButton;
