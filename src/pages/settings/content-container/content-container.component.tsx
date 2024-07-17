import ShowTimer from '../../../components/base/show-timer/show-timer.component';
import './content-container.css'

interface IProps {
  className?: string,
  title: string,
  subtitle?: string,
  savable?: boolean,
  index?: number,
  handleSubmit?: any,
  buttons?: {
    name: string,
    onClick: any,
    isSubmit?: boolean
  }[],
  children: any
}

<<<<<<< HEAD
const ContentContainer = ({ className, title, subtitle, savable, index = 0, handleSubmit, children }: IProps) => {
  return <ShowTimer timeout={50 + index*50}>
    <div onSubmit={handleSubmit} className={`content-container ${className}`}>
=======
const ContentContainer = ({ className, title, subtitle, savable, index = 0, handleSubmit, children, buttons }: IProps) => {
  return <ShowTimer timeout={50 + index * 50}>
    <form onSubmit={handleSubmit} className={`content-container ${className}`}>
>>>>>>> development
      <div className='header'>
        <div>
          <h1>{title}</h1>
          {subtitle && <h2>{subtitle}</h2>}
        </div>
<<<<<<< HEAD
      
=======
        {!buttons && savable && <button type="submit">حفظ</button>}
        {buttons && <div>{buttons.reverse().map(button => <button onClick={button.onClick} type={button.isSubmit ? 'submit' : 'button'}>{button.name}</button>)}</div>}
>>>>>>> development
      </div>
      <div className='body'>
        {children}
      </div>
    </div>
  </ShowTimer>
}

export default ContentContainer;
