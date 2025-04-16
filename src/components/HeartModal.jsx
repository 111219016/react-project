// import { Link } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import { addHeartItems, removeHeartItems, selectHeartItems } from "@/redux/heartSlice";
// // import { ShoppingBasket } from "lucide-react";

// export default function BasketModal({ isOpen, toggleModal }) {
//    const dispatch = useDispatch();
//    const heartItems = useSelector(selectHeartItems);

//    const handleCancel = () => toggleModal(!isOpen);
   

//    return (
//       <>
//          {/* DaisyUI Modal */}
//          {isOpen && (
//             <div className="modal modal-open">
//                <div className="modal-box max-w-md">
//                   <h3 className="font-thin text-[2rem] mb-4 text-left">Heart List</h3>
//                   {/* Cart Items */}
//                   {heartItems.length === 0 ? (
//                      <div className="text-center">Cart is empty</div>
//                   ) : (
//                      heartItems.map(item => (
//                         <li key={item.id} className="flex justify-between items-center pb-4 mb-4 border-b border-gray-400">
//                            <Link to={`/gallery/work/${item.category}/${item.id}`} onClick={handleCancel}>
//                               <img className="max-w-16 max-h-16 flex-1 cursor-pointer" src={item.image} alt={item.name} />
//                            </Link>
//                            <div className="ml-8 flex-8 w-48 text-left">
//                               <div className="font-medium mb-1">{item.name}</div>
//                               <div className="flex items-center space-x-2">
                                 
//                               </div>
//                            </div>
//                            <div className="text-right">
//                               {/* <div className="font-bold text-base">${item.price * item.qty}</div> */}
//                               <div
//                                  className="text-xl opacity-60 cursor-pointer"
//                                  onClick={() => dispatch(removeHeartItems(item.id))}
//                               >
//                                  x
//                               </div>
//                            </div>
//                         </li>
//                      ))
//                   )}

                  

//                   {/* Checkout Button */}
//                   {/* <button
//                      className="btn btn-primary w-full text-base font-light py-3 mt-8 flex justify-center items-center"
//                   >
//                      <ShoppingBasket strokeWidth={1} className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" />
//                      <span className="font-thin ml-3">START CHECKOUT</span>
//                   </button> */}

//                   {/* Close button */}
//                   <div className="absolute right-4 top-4 modal-action mt-4">
//                      <button onClick={handleCancel} className="btn btn-sm font-thin">X</button>
//                   </div>
//                </div>
//             </div>
//          )}
//       </>
//    );
// }