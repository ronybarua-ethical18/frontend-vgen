import { Button } from "@material-ui/core";
import styles from "./FormButton.module.css";
import Link from "next/link";

const FormButton = ({ text, icon, style, link }) => {
  return (
    <Link href={link ? link : ''}>
      <Button variant="contained" style={style} className={styles.btn}>
        {text} {icon}
      </Button>
    </Link>
  );
};

export default FormButton;
