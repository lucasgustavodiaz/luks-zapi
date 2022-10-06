import styles from '../style'
import { banner } from '../assets'

const Banner = () => (
  <div
    className={`${styles.flexCenter} flex-col h-[65vh] bg-[center_-135px] bg-no-repeat bg-fixed bg-cover contrast-75 text-white`}
    style={{ backgroundImage: `url(${banner})` }}
  >
    <h1>Las comidas mas Piolas del Oeste</h1>
    <p>Pedí online y rápido</p>
  </div>
)

export default Banner
