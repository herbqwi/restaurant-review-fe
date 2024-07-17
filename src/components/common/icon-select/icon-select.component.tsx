import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import './icon-select.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
  icon: IconDefinition,
  id: string,
  options: {
    value: string,
    content: string,
<<<<<<< HEAD
  }[]
}

const IconSelect = ({ icon, id, options }: IProps) => {
  return <div className='icon-select'>
    <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
    <select className='' name={id} id={id}>
=======
  }[],
  value?: any,
  onChange?: any,
  defaultValue?: string,
}

const IconSelect = ({ icon, id, options, value, onChange, defaultValue }: IProps) => {
  return <div className='icon-select'>
    <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
    <select value={value || defaultValue} onChange={onChange} className='' name={id} id={id}>
      {defaultValue && <option selected disabled value={defaultValue}>{defaultValue}</option>}
>>>>>>> development
      {options.map(option => <option value={option.value}>{option.content}</option>)}
    </select>
  </div>
}

export default IconSelect;