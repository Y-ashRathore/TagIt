import styles from "../Styles/heading.module.css"
import Navbar from "./navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
function Heading() {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.subContainer}>
                <div className={styles.headingcontainer}>
                    <div className={styles.heading}>
                        Tag-It Find-It
                    </div>
                    <div className={styles.subheading}>
                        Find your missing luggage<br /> Anytime! Anywhere!
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.btn}> Login </button>
                </div>
                <div className={styles.arrow}>
                    <FontAwesomeIcon icon={faChevronDown} size="3x" beatFade  />
                </div>
            </div>
        </div>
    );
}

export default Heading;