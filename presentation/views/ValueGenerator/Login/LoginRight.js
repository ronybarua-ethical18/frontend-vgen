import { Checkbox } from "@material-ui/core";
import Link from "next/link";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import FormInput from "../../../Components/Inputs/FormInput/FormInput";
import FormButton from "../../../Components/Buttons/FormButton/FormButton";
import styles from "./Login.module.css";
import FormTop from "../../../parts/FormTop/FormTop";

const LoginRight = () => {
  return (
    <div className={styles.loginRight}>
      <FormTop text="Login As Value Generator" />

      <form className={styles.loginform}>
        <FormInput
          icon={<EmailIcon />}
          type="text"
          placeholder="Email"
          label="Username or email"
        />
        <FormInput
          icon={<LockIcon />}
          type="password"
          placeholder="Password"
          label="Password"
        />
        <div className="center">
          <Checkbox fontSize="small" />
          <span>Remember Me</span>
        </div>
      </form>
      <FormButton link="/valuegenerator/dashboard" text="Login" />
      <div
        style={{
          marginTop: "1.5rem",
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
      >
        Want an account? <br />
        <Link href="/valuegenerator/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default LoginRight;
