import Header from './modules/header'
import styles from './page.module.css'
import Map from './modules/map'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <h1>hello world</h1>
      <Map/>
    </main>
  )
}
