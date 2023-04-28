import './ratings-list.css'
import RatingCard from './rating-card/rating-card.component';
import { useState } from 'react';
import useScroll from '../../../../hooks/scroll.hook';

const RatingsListSection = () => {

  interface IRate {
    image: string,
    name: string,
    job: string,
    title: string,
    description: string,
    stars: number,
  }

  const ratings: IRate[] = [
    {
      "image": "😃",
      "name": "توفيق السعيد",
      "job": "بيتزا المدينة",
      "title": "جودة طعام رائعة!",
      "description": "تناولت البيتزا في هذا المطعم وكانت لذيذة للغاية! الخدمة سريعة والأجواء جميلة.",
      "stars": 5
    },
    {
      "image": "👍",
      "name": "أحمد فاروق",
      "job": "مطعم القلعة الذهبية",
      "title": "أجواء غير مريحة",
      "description": "المطعم مزدحم وصاخب للغاية، مما جعل تجربة تناول الطعام غير ممتعة.",
      "stars": 2
    },
    {
      "image": "🤑",
      "name": "محمود الريس",
      "job": "سوشي طوكيو",
      "title": "أفضل سوشي في المدينة",
      "description": "لقد زرت العديد من المطاعم اليابانية ولكن هذا المكان يتفوق على الجميع.",
      "stars": 5
    },
    {
      "image": "😍",
      "name": "منى السعيد",
      "job": "مطعم العائلة السعيدة",
      "title": "أجواء عصرية وممتعة",
      "description": "تناولت الطعام هنا مع بعض الأصدقاء واستمتعنا بتجربة مميزة.",
      "stars": 5
    },
    {
      "image": "🥳",
      "name": "ياسر الخطيب",
      "job": "لمسة الشيف",
      "title": "الأسعار مبالغ بها",
      "description": "الأسعار في هذا المطعم مرتفعة جدًا مقارنة بجودة الطعام والخدمة التي تلقيناها.",
      "stars": 5
    },
    {
      "image": "😎",
      "name": "أحمد الخطيب",
      "job": "لمسة الشيف",
      "title": "تجربة لا تُنسى",
      "description": "تناولت الطعام هنا في مناسبة خاصة وتمتعت بتجربة فريدة",
      "stars": 4
    }
  ]

  const [elementRef, setElementRef] = useState(null);

  const isInView = useScroll(elementRef)

  return <section ref={setElementRef as any} className="ratings-list-container">
    <p>اخر المراجعات</p>
    {/* <KnifeTitle text={`Buyers Reviews`} column={true}></KnifeTitle> */}
    <div className="ratings-list-wrapper">
      <div className={`ratings-list${isInView ? ` in-view` : ``}`}>
        {
          ratings.map((rate) => <RatingCard image={rate.image} name={rate.name} job={rate.job} title={rate.title} description={rate.description} stars={rate.stars}></RatingCard>)
        }
      </div>
    </div>
  </section>
}

export default RatingsListSection;