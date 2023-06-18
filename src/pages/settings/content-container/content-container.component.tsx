import ShowTimer from '../../../components/base/show-timer/show-timer.component';
import './content-container.css'

interface IProps {
  className?: string,
  title: string,
  subtitle: string,
  savable?: boolean,
  handleSubmit?: any,
  children: any
}

const ContentContainer = ({ className, title, subtitle, savable, handleSubmit, children }: IProps) => {
  return <ShowTimer timeout={50}>
    <form onSubmit={handleSubmit} className={`content-container ${className}`}>
      <div className='header'>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        {savable && <button type="submit">حفظ</button>}
      </div>
      <div className='body'>
        {children}
      </div>
    </form>
  </ShowTimer>
}

export default ContentContainer;
