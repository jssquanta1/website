import styles from "../styles/zealicon.module.css";
export default function ZeliconHero(){
    return(<div className={styles.hero}>
        <div className={styles.left}>
          <h1>Zealicon</h1>
          <div className= {styles.year}>2024</div>
          <p className= {styles.first}>At Quanta, we bring you four epic events at Zealicon: Robo Olympics, Mighty Maneuver, Tomorrow Tesla and Riddle Craft.</p>
          <p className={styles.second}>Get ready for some dhamaal and masti as we present to you these blockbuster events.</p>
        </div>
        <div className={styles.vid}>
        <iframe src="https://youtu.be/BqDKH6x3BN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>)

}










