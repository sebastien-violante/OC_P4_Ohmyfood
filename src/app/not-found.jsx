import { notFound } from "next/navigation"  
import Link from "next/link"
import styles from './notfound.module.css'

export default function NotFound() {

    return (
      <div className={styles.notfoundWrapper}>
        <div className={styles.notfoundMessage}>
          <h1 className={styles.notfoundTitle}>404 | Page non trouvée</h1>
          <p className={styles.notfoundParagraph}>Désolé, cette page n'est pas au menu !</p>
          <Link className={styles.notfoundLink} href="/"><button className={styles.returnToHome}>Retour à l'accueil</button></Link>
        </div>
      </div>
    )
}