import A from "./A";
import styles from "../styles/navbar.module.css";

interface IContainer {
  children: React.ReactNode;
  keywords?: string;
}
const Container = ({ children, keywords }: IContainer) => {
  return (
    <>
      <nav className={styles.navbar}>
        <A href="/" text="Главная" />
        <A href="/users" text="Пользователи" />
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Container;
