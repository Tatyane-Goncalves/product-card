import styles from "./ProductCard.module.scss"

const ProductCard = ({ image, title, price, promoPrice, rating, tag, discount  }) => {
  return (
    <article className={styles.ProductCard}>
      <div className={styles.productCard__wrapper}>
        {image ? (
          <img src={image} alt={title} className={styles.productCard__image} />
        ): (
          <div className={styles.productCard__fallback}>{title?.charAt(0)}</div>
        )}

        <h2 className={styles.productCard__title}>{title}</h2>
        <div className={styles.prices}>
         <span className={styles.prices__price}>{price}</span>
          {promoPrice && (
            <span className={styles.prices__promoPrice}>{promoPrice}</span>
          )}
        </div>

        <div className={styles.bottom}>
            {rating && (
              <span className={styles.rating}>⭐ {rating}</span>
            )}

            {tag && (
              <span className={styles.tag}>{tag}</span>
            )}

            {discount && (
              <span className={styles.discount}>{discount}</span>
            )}

        </div>


      </div>
    </article>
  )
}

export default ProductCard