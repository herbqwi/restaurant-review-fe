import './select.css'

interface IProps {
  id: string,
  label?: string,

  controller?: { value: any, set: React.Dispatch<React.SetStateAction<any>> },
  options: {
    value: string,
    content: string,
  }[],
  defaultValue?: string,
  [key: string]: any;
}

const Select = ({ id, label, controller, options, defaultValue, ...props }: IProps) => {
  return <div className='input-group'>
    {label && <label><span>{label}</span>&nbsp;</label>}
    <select {...props} value={controller?.value || defaultValue} onChange={(e) => controller?.set(e.target.value)} name={id} id={id}>
      {defaultValue && <option selected disabled value={defaultValue}>{defaultValue}</option>}
      {options.map(option => <option value={option.value}>{option.content}</option>)}
    </select>
  </div>
}

export default Select;
