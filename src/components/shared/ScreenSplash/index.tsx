import { Controls, Player } from '@lottiefiles/react-lottie-player'
import styles from './styles.module.sass'
export default function SplashScreen() {
    return <div className={styles.container}>
        <div className={styles.logo}>
            <Player style={{ width: '100%', height: '100%' }} src='/assets/json/LogoAnimation.json' autoplay loop>
                <Controls visible={false}/>
            </Player>
        </div>
    </div>
}
