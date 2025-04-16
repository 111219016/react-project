import { useState } from "react";
import { Heart } from "lucide-react";

function HeartSummary() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <nav
            onClick={toggleModal}
            className="inline-block absolute top-6 right-2 md:right-6 cursor-pointer"
        >

            <div className="indicator">
                <span className=" indicator-item badge badge-lg badge-neutral text-[#FFFBF3]">5</span>
                <Heart size={48} strokeWidth={2} className="stroke-[#FFFBF3] hover:brightness-75 hover:fill-red-600 duration-300"/>
            </div>

        </nav>
    );
}

export default HeartSummary;