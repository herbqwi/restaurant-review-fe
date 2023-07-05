import './ratings-list.css'
import RatingCard from './rating-card/rating-card.component';
import { useEffect, useState } from 'react';
import useScroll from '../../../../hooks/scroll.hook';
import axios, { AxiosResponse } from 'axios';
import { IRestaurant } from '../../../../interfaces/restaurant.interface';

interface IProps {
  className?: string,
}

const RatingsListSection = ({ className }: IProps) => {

  // const defaultRatings = [
  //   {
  //     image: "😃",
  //     name: "توفيق السعيد",
  //     job: "بيتزا المدينة",
  //     title: "جودة طعام رائعة!",
  //     description: "تناولت البيتزا في هذا المطعم وكانت لذيذة للغاية! الخدمة سريعة والأجواء جميلة.",
  //     stars: 5
  //   },
  //   {
  //     image: "👍",
  //     name: "أحمد فاروق",
  //     job: "مطعم القلعة الذهبية",
  //     title: "أجواء غير مريحة",
  //     description: "المطعم مزدحم وصاخب للغاية، مما جعل تجربة تناول الطعام غير ممتعة.",
  //     stars: 2
  //   },
  //   {
  //     image: "🤑",
  //     name: "محمود الريس",
  //     job: "سوشي طوكيو",
  //     title: "أفضل سوشي في المدينة",
  //     description: "لقد زرت العديد من المطاعم اليابانية ولكن هذا المكان يتفوق على الجميع.",
  //     stars: 5
  //   },
  //   {
  //     image: "😍",
  //     name: "منى السعيد",
  //     job: "مطعم العائلة السعيدة",
  //     title: "أجواء عصرية وممتعة",
  //     description: "تناولت الطعام هنا مع بعض الأصدقاء واستمتعنا بتجربة مميزة.",
  //     stars: 5
  //   },
  //   {
  //     image: "🥳",
  //     name: "ياسر الخطيب",
  //     job: "لمسة الشيف",
  //     title: "الأسعار مبالغ بها",
  //     description: "الأسعار في هذا المطعم مرتفعة جدًا مقارنة بجودة الطعام والخدمة التي تلقيناها.",
  //     stars: 5
  //   },
  //   {
  //     image: "😎",
  //     name: "أحمد الخطيب",
  //     job: "لمسة الشيف",
  //     title: "تجربة لا تُنسى",
  //     description: "تناولت الطعام هنا في مناسبة خاصة وتمتعت بتجربة فريدة",
  //     stars: 4
  //   }
  // ]

  const [ratings, setRatings] = useState<IRestaurant.Review[]>([])

  useEffect(() => {
    axios.get(`http://localhost:8000/restaurant/reviews`).then((res: AxiosResponse<IRestaurant.Review[]>) => {
      setRatings(res.data)
    })
  }, [])

  return <section className={`ratings-list-container${className ? ` ${className}` : ``}`}>
    <p>اخر المراجعات</p>
    <div className="ratings-list-wrapper">
      <div className="ratings-list">
        {ratings.map((rate) => <RatingCard emoji={`😎`} customerName={rate.userName as string} restaurantName={rate.restaurantName as string} company={rate.company} description={rate.content} starRating={rate.starRating}></RatingCard>)}
      </div>
    </div>
  </section>
}

export default RatingsListSection;