import {  useState } from "react";
import "./review-card.css";
import { Star, ChatTeardropText } from "@phosphor-icons/react";
import { RestaurantData } from "../../../add-restaurant-form/add-restaurant-form";
const ReviewCard = () => {
  const [data, setRestaurant] = useState<RestaurantData>({
    Name: 'مطهم زوار',
    Address: 'الخليل',
    Phone: '0599663037',
    Description: 'مطعم مختص بالأكلات الشعبية ',
    ResType: "شعبي",
    Images: [],
    Service: [{ ServiceName: "مغلق الان", ServiceIcon: "https://www.shutterstock.com/image-vector/wall-clock-displaying-900-oclock-260nw-1640714170.jpg"},
      { ServiceName: "موقف للسيارات", ServiceIcon: "https://www.shutterstock.com/image-vector/wall-clock-displaying-900-oclock-260nw-1640714170.jpg" },
      { ServiceName: "خدمة التوصيل", ServiceIcon: "https://www.shutterstock.com/image-vector/wall-clock-displaying-900-oclock-260nw-1640714170.jpg" }
  ],
    Location: 'الخليل',
    clicked: false,
    ImagePreviews: []
  });

  return (
    <div className="card">
      <img src="https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg=" alt="" className="res-image" />
      <div className="content">
        <div className="name-rate">
          <div className="name">
            <h1>{data.Name}</h1>
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
          {
            data.Service.map((ser)=>{
             return <div className="case">
              <img src={ser.ServiceIcon} width={50} height={50}/>
                <span>{ser.ServiceName}</span>
              </div>
            })
          }
         
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