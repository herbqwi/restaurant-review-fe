import "./review-card.css";
import { Star, Clock, CarSimple, Truck, ChatTeardropText } from "@phosphor-icons/react";
const ReviewCard = () => {
  return (
    <div className="card">
      <img src="https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg=" alt="" className="res-image" />
      <div className="content">
        <div className="name-rate">
          <div className="name">
            <h1>مطعم زوار</h1>
            <p>2.15كم</p>
          </div>
          <div className="rate">
            <span className="share">مشاركة 125</span>
            <div className="star">
            <Star size={30} color="#FFA500" weight="fill" />
              <Star size={30} color="#FFA500" weight="fill" />
              <Star size={30} color="#FFA500" weight="fill" />
              <Star size={30} color="#FFA500" weight="fill" />
              <Star size={30} color="#FFA500" weight="fill" />
            </div>
          </div>
        </div>
        <div className="border"></div>
        <div className="status">
          <div className="case">
            <Clock size={24} color="#050505" weight="fill" />
            <span>مغلق الان</span>
          </div>
          <div className="case">
            <CarSimple size={24} color="#050505" weight="fill" />
            <span>موقف للسيارات</span>
          </div>
          <div className="case">
            <Truck size={24} color="#050505" weight="fill" />
            <span>خدمة التوصيل</span>
          </div>
          <div className="case">
            <Truck size={24} color="#050505" weight="fill" />
            <span>خدمة التوصيل</span>
          </div>
        </div>
        <div className="feedback">
          <ChatTeardropText size={24} color="#050505" weight="thin" />
          <span>قررت أنا وزوجتي أن نزور المطعم لتناول العشاء بناءً على توصية من أحد أصدقائنا. للأسف، لم تكن التجربة على المستوى المتوقع. كان الطعام باهتًا وغير لذيذ، وكانت بعض الأطباق باردة عندما وصلت إلى الطاولة.</span>
        </div>
      </div>
    </div>
  )
}
export default ReviewCard;