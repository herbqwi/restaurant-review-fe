import React from 'react';
import './input.css';

interface IProps {
  label: string;
  required?: boolean;
  controller?: { value: string, set: any },
  LTRContent?: boolean,
  [key: string]: any;
}

const Input = ({ label, required, controller, LTRContent, ...props }: IProps) => {

  return (
    <div className="input-group">
      {
        label ? (
          <label>
            <span>{label}</span>
            &nbsp;
          </label>
        ) : null
      }
      {controller ? <input className={LTRContent ? 'ltr-content' : ''} value={controller.value} onChange={(e) => controller.set(e.target.value)} {...props} />
        : <input {...props} />}
    </div>
  );
};

export default Input;
