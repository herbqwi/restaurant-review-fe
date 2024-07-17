import './ratings-list.css'
import RatingCard from './rating-card/rating-card.component';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { IRestaurant } from '../../../../../interfaces/restaurant.interface';
import { generateRandomNumber } from '../../../../../services/general.utils';

interface IProps {
  className?: string,
}

const RatingsListSection = ({ className }: IProps) => {

  const defaultRatings: IRestaurant.Review[] = [
    {
      userId: "توفيق السعيد",
      userName: "توفيق السعيد",
      content: "تناولت البيتزا في هذا المطعم وكانت لذيذة للغاية! الخدمة سريعة والأجواء جميلة.",
      starRating: 5,
      restaurantName: "اسم المطعم",
      company: IRestaurant.Company.BIG_GROUPS
    },
    {
      userId: "أحمد فاروق",
      userName: "أحمد فاروق",
      content: "المطعم مزدحم وصاخب للغاية، مما جعل تجربة تناول الطعام غير ممتعة.",
      starRating: 2,
      restaurantName: "اسم المطعم",
      company: IRestaurant.Company.BIG_GROUPS
    },
    {
      userId: "محمود الريس",
      userName: "محمود الريس",
      content: "لقد زرت العديد من المطاعم اليابانية ولكن هذا المكان يتفوق على الجميع.",
      starRating: 5,
      restaurantName: "اسم المطعم",
      company: IRestaurant.Company.BIG_GROUPS
    },
    {
      userId: "منى السعيد",
      userName: "منى السعيد",
      content: "تناولت الطعام هنا مع بعض الأصدقاء واستمتعنا بتجربة مميزة.",
      starRating: 5,
      restaurantName: "اسم المطعم",
      company: IRestaurant.Company.BIG_GROUPS
    },
    {
      userId: "ياسر الخطيب",
      userName: "ياسر الخطيب",
      content: "الأسعار في هذا المطعم مرتفعة جدًا مقارنة بجودة الطعام والخدمة التي تلقيناها.",
      starRating: 5,
      restaurantName: "اسم المطعم",
      company: IRestaurant.Company.BIG_GROUPS
    },
    {
      userId: "أحمد الخطيب",
      userName: "أحمد الخطيب",
      content: "تناولت الطعام هنا في مناسبة خاصة وتمتعت بتجربة فريدة",
      starRating: 4,
      restaurantName: "اسم المطعم",
      company: IRestaurant.Company.BIG_GROUPS
    }
  ]

  const emojiArray = [
    ["😞", "😔", "😕", "😟", "🙁"],    // Star Rating = 0
    ["😞", "😔", "😕", "😟", "🙁"],    // Star Rating = 1
    ["😐", "😕", "😒", "😑", "😬"],    // Star Rating = 2
    ["🙂", "😊", "😄", "😃", "😁"],    // Star Rating = 3
    ["😄", "😍", "😃", "👍", "💯"],    // Star Rating = 4
    ["😍", "🤩", "👌", "💯", "👏"]     // Star Rating = 5
  ];


  const [ratings, setRatings] = useState<IRestaurant.Review[]>([])

  useEffect(() => {
    // axios.get(`http://localhost:8000/restaurant/reviews`).then((res: AxiosResponse<IRestaurant.Review[]>) => {
    //   setRatings(res.data)
    // })
    setRatings(defaultRatings)
  }, [])

  return <section className={`ratings-list-container${className ? ` ${className}` : ''}`}>
    <p>اخر المراجعات</p>
    <div className="ratings-list-wrapper">
      <div className="ratings-list">
        {ratings.map((rate) => <RatingCard emoji={emojiArray[rate.starRating][generateRandomNumber(5)]} customerName={rate.userName as string} restaurantName={rate.restaurantName as string} company={rate.company} description={rate.content} starRating={rate.starRating}></RatingCard>)}
      </div>
    </div>
  </section>
}

export default RatingsListSection;