import styles from "./Loader.module.scss"

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__spinner}></div>
      <span>Carregando produtos</span>
    </div>
  )
}

export default Loader