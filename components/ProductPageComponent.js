import styles from './ProductPageComponent.module.css'
const imageUrl = "https://www.jcrew.com/s7-img-facade/";
import Image from 'next/image'


function ProductPageComponent(props) {
      const {
        colors,
        defaultColorCode,
        productCode,
        productDescription,
        productId,
        listPrice,
        imageSrc = imageUrl + productCode + "_" + defaultColorCode + "_m",
      } = props.product_selected;
  
        const colorUrl = (color) =>
          imageUrl + productCode + "_" + color.colorCode + "_sw";
      
    return (
      <section >
        <Image src={imageSrc} width="700" height="700" />
        <div className={styles.content}>
          <h3> {productDescription}</h3>
          <p>{listPrice.formatted}</p>
          <div className={styles.swatches}>
            {colors.map((color) => {
              return (
                <div>
                  {console.log(colorUrl(color))}
                  <Image
                    src={colorUrl(color)}
                    width="25"
                    height="25"
                    className={styles.circle}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
}

export default ProductPageComponent;