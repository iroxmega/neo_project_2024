import { FC } from "react";
import { CartItem } from "../components/CartItem.tsx";
import styles from "../scss/styles.module.scss";
import { useSelector } from "react-redux";
import { CartItemProps, CartSliceState } from "../redux/cartClice.ts";
import { Rootstate } from "../redux/store.ts";

export const Cart: FC = () => {
    const { items, totalPrice }: CartSliceState = useSelector(
        (state: Rootstate) => state.cart,
    );

    const totalCount: number = items.reduce(
        (sum: number, item: CartItemProps) => sum + item.count,
        0,
    );


    return (
        <div className={styles.cart}>
            {totalCount === 0 ? (
                <h1 className={styles.cart__emptyCart} style={{display: 'flex', justifyContent:"center"}}>Корзина пуста</h1>
            ) : (
                <>
                    <ul className={styles.cart__items}>
                        {items.map((obj: CartItemProps) => (
                            <li key={obj.id}>
                                <CartItem {...obj} />
                            </li>
                        ))}
                    </ul>
                    <div className={styles.cart__purchaseBlock}>
                        <div className={styles.cart__purchaseBlock__cost}>
                            <div>ИТОГО</div>
                            <div>₽{" " + totalPrice}</div>
                        </div>
                        <button>Перейти к оформлению</button>
                    </div>
                </>
            )}
        </div>
    );
};
