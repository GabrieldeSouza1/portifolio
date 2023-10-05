import Image from 'next/image'
import styles from './page.module.css'
import Portifolio from '@/pages/portifolio'

export default function App() {
  return (
    <div className={styles.main}>
          <Portifolio/>
    </div>

  )
}
