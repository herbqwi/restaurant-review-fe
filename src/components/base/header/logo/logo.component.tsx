import { Link } from 'react-router-dom';
import './logo.css'
import tastifyLogo from '../../../../assets/tastify-logo.png'

interface IProps {
    className?: string,
}

const Logo = ({ className }: IProps) => {
    return <Link to="/home" className={`logo-container ${className}`}>
        <img src={tastifyLogo} alt="" />
    </Link>
}

export default Logo;