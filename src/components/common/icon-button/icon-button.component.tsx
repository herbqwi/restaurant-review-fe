import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import './icon-button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
  children: string,
  icon: IconDefinition,
  main?: boolean,
  onClick?: any,
  className?: string,
}

<<<<<<< HEAD
const IconButton = ({ children, icon, main, onClick, className }: IProps) => {
  return <div className={`input-container clickable${className ? ` ${className}` : ``}`}>
    <button onClick={onClick} className={`icon-button${main ? ` main` : ``}`}>
=======
const IconButton = ({ children, icon, main, onClick, className, ...props }: IProps) => {
  return <div className={`input-container clickable${className ? ` ${className}` : ''}`}>
    <button {...props} onClick={onClick} className={`icon-button${main ? ` main` : ''}`}>
>>>>>>> development
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      {children}</button>
  </div>
}

export default IconButton;