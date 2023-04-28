import './multi-input.css'

interface IProps {
  elements: any[];
  className?: string,
}

const MultiInput = ({ elements, className }: IProps) => {
  return <div className={`input-container${className? ` ${className}` : ``}`}>
    {elements.map(
      element => element
    )}
  </div>
}

export default MultiInput;