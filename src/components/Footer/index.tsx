import {FiArrowRight } from "react-icons/fi";
import styles from './footer.module.scss'

export function Footer() {
    return(
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <img src="../images/video.png" alt=""/>
                <nav>
                    <a >FACEBOOK</a>
                    <a>INSTAGRAM</a>
                    <a>YOUTUBE</a>
                    <a>TWITTER</a>
                </nav>
                <section>
                    <p>EXPLORE MAIS <FiArrowRight className={styles.chevron}/></p>
                </section>
            </div>
        </footer>
    )
}