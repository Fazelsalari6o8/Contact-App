import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        Developed with ❤️ by ✌️
        <a href="https://github.com/fazelsalari6o8" target="_blank">
          developer6o8
        </a>
        ✌️
      </p>
    </div>
  );
}

export default Header;
