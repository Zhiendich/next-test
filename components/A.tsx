import Link from "next/link";
import styles from "../styles/nav-link.module.css";
interface ILink {
  href: string;
  text: string;
}
const A = ({ href, text }: ILink) => {
  return (
    <Link className={styles.link} href={href}>
      {text}
    </Link>
  );
};

export default A;
