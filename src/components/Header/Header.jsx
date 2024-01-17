import portfolio from "../../assets/portfolio.png";
import styles from "./style.module.css";
export const Header = () =>{
    return (
        <header className={styles.header}>
            <div className="container">
                <img src={portfolio} alt="Portfolio" />
                <nav>
                    <a className="paragraph" href="#about">About</a>
                    <a className="paragraph" href="#stack">Stack</a>
                    <a className="paragraph" href="#projects">Project</a>
                </nav>
                <button type="button" className='but' onClick={()=>{location.replace("#footer")}}>Contact</button>
            </div>
        </header>
    )
}  