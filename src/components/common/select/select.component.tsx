import './select.css'

interface IProps {
  id: string,
  label?: string,
  options: {
    value: string,
    content: string,
  }[]
}

const Select = ({ id, label, options }: IProps) => {
  return <div className='input-group'>
    {label && <label><span>{label}</span>&nbsp;</label>}
    <select name={id} id={id}>
      {options.map(option => <option value={option.value}>{option.content}</option>)}
    </select>
  </div>
}

export default Select;