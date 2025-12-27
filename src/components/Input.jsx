import styles from '../styles/Input.module.css'

export default function Input ({label,icon,...props}){
    return (
        <>
            <div className={styles.input}>
                <img src={icon} alt="This is an icon" />
                <label htmlFor={label}>{label}</label>
                <input {...props}/>
            </div>
        </>
    );
}