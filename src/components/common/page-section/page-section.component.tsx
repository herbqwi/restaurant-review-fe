import ShowTimer from '../../base/show-timer/show-timer.component';
import './page-section.css'

interface IProps {
  timeout?: number,
  className?: string,
  [key: string]: any;
}

const PageSection = ({ timeout, children, ...props }: IProps) => {
  return <>
    <section {...props}>
      {children}
    </section>
    <ShowTimer timeout={timeout ? timeout : 0}><div className="border"></div></ShowTimer></>
}

export default PageSection;