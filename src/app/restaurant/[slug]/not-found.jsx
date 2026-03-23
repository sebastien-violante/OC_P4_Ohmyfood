import Link from "next/link"
import styles from '@/app/notfound.module.css'

export default function NotFound() {

    return (
      <div className={styles.notfoundWrapper}>
        <div className={styles.notfoundMessage}>
          <h1 className={styles.notfoundTitle}>404 | Etablissement non trouvé</h1>
          <p className={styles.notfoundParagraph}>Désolé, ce restaurant n'est pas référencé chez Ohmyfood !</p>
          <Link className={styles.notfoundLink} href="/"><button className={styles.returnToHome}>Retour aux restaurants</button></Link>
        </div>
      </div>
    )
}