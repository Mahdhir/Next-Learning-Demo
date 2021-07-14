import headerStyles from '../styles/Header.module.css'

const Header:React.FC = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> News
            </h1>
            <p className={headerStyles.description}>Keep up to date with the latest news in Web Dev</p>
        </div>
    )
}

export default Header
