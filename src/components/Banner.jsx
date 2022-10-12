import styles from '../style'
import { banner } from '../assets'

const Banner = () => (
  <div
    className={`${styles.flexCenter} before: befor:w-[100%] relative h-[65vh] flex-col bg-cover bg-fixed bg-[center_-135px] bg-no-repeat text-white before:absolute before:top-0 before:left-0 before:h-[65vh] before:w-[100%] before:bg-black before:opacity-40 before:content-['']`}
    style={{ backgroundImage: `url(${banner})` }}
  >
    <h1 className="h1-principal">Las comidas más Piolas de Santa Rosa</h1>
    <p className="p-principal">Pedí online y rápido</p>
  </div>
)

export default Banner
