import ShowTimer from '../../../components/base/show-timer/show-timer.component';
import './content-container.css'

interface IProps {
  className?: string,
  title: string,
  subtitle?: string,
  savable?: boolean,
  index?: number,
  handleSubmit?: any,
  children: any
}

const ContentContainer = ({ className, title, subtitle, savable, index = 0, handleSubmit, children }: IProps) => {
  return <ShowTimer timeout={50 + index*50}>
    <div onSubmit={handleSubmit} className={`content-container ${className}`}>
      <div className='header'>
        <div>
          <h1>{title}</h1>
          {subtitle && <h2>{subtitle}</h2>}
        </div>
      
      </div>
      <div className='body'>
        {children}
      </div>
    </div>
  </ShowTimer>
}

export default ContentContainer;
