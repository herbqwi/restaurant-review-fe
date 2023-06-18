import ShowTimer from '../../components/base/show-timer/show-timer.component';
import HomeHero from '../../components/home/home-hero/home-hero.component';
import RatingsListSection from '../../components/home/sections/ratings-list/ratings-list.component';
import './home.css'

interface IProps {
  className?: string,
}

const HomePage = ({ className }: IProps) => {
  return <div className={`home-page ${className ? ` ${className}` : ``}`}>
    <div className="body">
      <ShowTimer timeout={150}><RatingsListSection></RatingsListSection></ShowTimer>
    </div>
  </div>
}

export default HomePage;
