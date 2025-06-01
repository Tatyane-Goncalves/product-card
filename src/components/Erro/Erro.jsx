import styles from "./Erro.module.scss"

const Erro = ({ message = " Erro ao carregar dados." }) => {
  return (
    <div className={styles.error}>
      <span>{message}</span>
    </div>
  )
}

export default Erro