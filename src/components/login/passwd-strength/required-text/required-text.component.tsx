import { ReactNode } from 'react';
// import './required-text.css'

const RequiredText = ({ children, ...props }: { children: ReactNode, className: string, text: string }) => {
    return <p {...props}>{children} <span style={{ color: `red` }}>*</span></p>
}

export default RequiredText;