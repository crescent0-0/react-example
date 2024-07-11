import PropTypes from "prop-types";
import styles from "./Button.module.css";  // 스타일 적용 방식

function Button({text}) {
    return <button className={styles.btn}>{text}</button>
}

Button.propTypes = {  // 추천) 컴포넌트에 속성을 지정해주기
    text: PropTypes.string.isRequired,
}

export default Button;