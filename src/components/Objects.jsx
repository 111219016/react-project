import { Link } from "react-router"

function Objects() {
    return (
        <>
        <h4 className="block justify-self-center pb-5 font-semibold">Category</h4>
        <div className="flex flex-wrap justify-center">
            <button className="mb-3 shadow-md w-9/10 h-20 bg-[#FFFBF3]  duration-300 hover:brightness-75">
                <h4>人物</h4>
            </button>
            <button className="mb-3 shadow-md w-9/10 h-20 bg-[#FFFBF3]  duration-300 hover:brightness-75">
                <h4>風景</h4>
            </button>
            <button className="mb-3 shadow-md w-9/10 h-20 bg-[#FFFBF3]  duration-300 hover:brightness-75">
                <h4>靜物</h4>
            </button>
        </div>
        </>
    );
}

export default Objects;