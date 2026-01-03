import styles from '../styles/Input.module.css'

export default function Input ({label,icon,id,...props}){
    return (
        <>
            <div className={styles.input}>
                <img src={icon} alt="This is an icon" />
                <label htmlFor={id}>{label}</label>
                <input id={id} {...props}/>
            </div>
        </>
    );
}