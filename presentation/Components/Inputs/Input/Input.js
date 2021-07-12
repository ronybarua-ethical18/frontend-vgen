import styles from "./Input.module.css"
import React from 'react'

const SignupInput = ({ icon, type, placeholder, name, label }, ref) => {
  return (
    <div className={styles.formInput}>
      <label>{label}</label>
      <div className={styles.input}>
        <input type={type} placeholder={placeholder} name={name} ref={ref} required/>
        {icon}
      </div>
    </div>
  );
};
const forwardedInput = React.forwardRef(SignupInput)
export default forwardedInput;
