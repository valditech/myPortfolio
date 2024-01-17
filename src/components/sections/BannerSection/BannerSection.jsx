import { username } from "../../../data/user"
import bannerImg from "../../../assets/Untitled-design-6.png";
import styles from "./style.module.css"

export const BannerSection = ()=>{
    return (
        <section className={styles.banner}>
            <div className="container">
                <section className={styles.sectionText}>
                    <span className="label">{username}</span>
					<h1 className="title1">Welcome to my portfolio</h1>
					<p className="paragraph">check my LinkedIn</p>
					<button className="but" onClick={()=>location.replace('https://www.linkedin.com/in/valdi-noel-ba19122a9/')} >know more</button>
                </section>
                <img src={bannerImg}/>
            </div>
        </section>
    )
}