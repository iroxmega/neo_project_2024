import { FC } from "react";
import vk from "../assets/svg/vk.svg";
import telegram from "../assets/svg/telegram.svg";
import whatsapp from "../assets/svg/whatsapp.svg";
import earth from "../assets/svg/world.svg";
import styles from "../scss/styles.module.scss";
import { useNavigate } from "react-router-dom";
export const Footer: FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.footer}>
            <div
                className={styles.footer__logo}
                onClick={() => {
                    navigate("/");
                    window.scroll(0, 0);
                }}
            >
                QPICK
            </div>
            <ul className={styles.footer__optionsList}>
                <li>Избранное</li>
                <li
                    onClick={() => navigate("/cart")}
                    className={styles.footer__optionsList__buy}
                >
                    Корзина
                </li>
                <li>Контакты</li>
            </ul>
            <div className={styles.footer__serviceAdd}>
                <p className={styles.footer__serviceAdd__service}>
                    Условия сервиса
                </p>
                <div className={styles.footer__serviceAdd__lang}>
                    <img src={earth} alt="earth" />
                    <span className={styles.footer__serviceAdd__lang__rus}>
                        Рус
                    </span>
                    <span className={styles.footer__serviceAdd__lang__eng}>
                        Eng
                    </span>
                </div>
            </div>
            <div className={styles.footer__social}>
                <a href="https://vk.com/neoflex_ru">
                    <img src={vk} alt="VK" />
                </a>
                <a href="https://t.me/neoflexcareers">
                    <img src={telegram} alt="Telegram" />
                </a>
                <a href="https://www.whatsapp.com/">
                    <img src={whatsapp} alt="WhatsApp" />
                </a>
            </div>
        </div>
    );
};
