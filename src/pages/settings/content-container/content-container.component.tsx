import ShowTimer from '../../../components/base/show-timer/show-timer.component';
import './content-container.css'

const ContentContainer = ({ className, title, subtitle, savable, children }: { className?: string, title: string, subtitle: string, savable?: boolean, children: any }) => {
  return <ShowTimer timeout={50}>
    <form className={`content-container ${className}`}>
      <div className='header'>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        {savable && <a href="">حفظ</a>}
      </div>
      <div className='body'>
        {children}
      </div>
    </form>
  </ShowTimer>
}

export default ContentContainer;