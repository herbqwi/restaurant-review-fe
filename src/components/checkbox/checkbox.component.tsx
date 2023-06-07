import './checkbox.css';

/**
 * Renders a checkbox element.
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
 *  label?: string;
 * }} props 
 */
const CheckBox = (props:any) => {
  const { label, ...inputProps } = props;

  return (
    <div className="checkbox-group">
      <input {...inputProps} type="checkbox" id={`cheack-${label}`} />
      {
        label ? (
          <label htmlFor={`cheack-${label}`} className={props.checked ? 'checked' : ''}>
            <label></label>
            <span>{label}</span>
            &nbsp;
            {inputProps.required && <span>*</span>}
          </label>
        ) : null
      }
    </div>
  );
};

export default CheckBox;
