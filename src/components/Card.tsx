import styles from './card.module.css'
import Image from 'next/image'

export default function ProductCard() {
    return (
        <div className = {styles.card}>
            <div className = {styles.cardimg}>
                <Image src = {'/img/place1.jpg'}
                alt = 'Place Picture'
                fill = {true}
                objectFit='cover'
                />
            </div>
            <div className = {styles.cardtext}>
                Machu Picchu
                <div className = {styles.cardsubtext}>
                This is a picture of Machu Picchu.
                </div>
            </div>
            
        </div>
    );
}