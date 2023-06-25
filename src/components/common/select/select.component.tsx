import './select.css'

interface IProps {
  id: string,
  label?: string,

  controller?: { value: any, set: React.Dispatch<React.SetStateAction<any>> },
  options: {
    value: string,
    content: string,
  }[]
}

const Select = ({ id, label, controller, options }: IProps) => {
  return <div className='input-group'>
    {label && <label><span>{label}</span>&nbsp;</label>}
    <select value={controller?.value} onChange={(e) => controller?.set(e.target.value)} name={id} id={id}>
      {options.map(option => <option value={option.value}>{option.content}</option>)}
    </select>
  </div>
}

export default Select;
