import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { calculateTotals, getCartItems } from "./features/cartSlice";

function App() {
    const { cartItems, isLoading } = useSelector((state) => state.cart);
    const { isOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems]);
    useEffect(() => {
        dispatch(getCartItems());
    }, []);
    return isLoading ? (
        <div>dfjkhadkjf</div>
    ) : (
        <main>
            {isOpen && <Modal />}
            <Navbar />
            <CartContainer />
        </main>
    );
}
export default App;
