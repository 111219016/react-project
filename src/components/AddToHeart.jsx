// import { ShoppingBasket } from "lucide-react";

export default function AddToHeart() {

  return (
    <button className="w-fit  p-0 justify-items-end">
        <img src="/images/addtoheart.svg" triggers="manual" className="cursor-pointer w-5 h-5 md:w-6 md:h-6 text-current hover:scale-200 transition-transform" />
        {/* <span className="font-thin ml-3">ADD TO BASKET</span> */}
    </button>
  );
}