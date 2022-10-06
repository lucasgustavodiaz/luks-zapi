import styles from '../style'
import { banner } from '../assets'

const Banner = () => (
  <div
    className={`${styles.flexCenter} h-[65vh] flex-col bg-cover bg-fixed bg-[center_-135px] bg-no-repeat text-white contrast-75`}
    style={{ backgroundImage: `url(${banner})` }}
  >
    <h1>Las comidas mas Piolas del Oeste</h1>
    <p>Pedí online y rápido</p>
  </div>
)

export default Banner
