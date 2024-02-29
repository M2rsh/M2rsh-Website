import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.maintext}>&lt;!-- 404 Not found --&gt;</h1>
        <p className={styles.subtext}>
          The page you're looking for doesn't exist
        </p>
        <a className={styles.mainbutton} href="/">
          <span className={styles.smaller}>/</span> Go back{" "}
          <span className={styles.smaller}>/</span>
        </a>
      </div>
    </>
  );
}

export default NotFound;
