import ShowTimer from '../../components/base/show-timer/show-timer.component';
import RatingsListSection from '../../components/pages/home/sections/ratings-list/ratings-list.component';

export default function HomePage() {
  return (
    <main>
      <ShowTimer timeout={150}><RatingsListSection /></ShowTimer>
    </main>
  )
}