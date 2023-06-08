import "./review-card.css";
import { Star, ChatTeardropText, Spinner } from "@phosphor-icons/react";
import { Slide } from 'react-slideshow-image';
import useGetRestaurant from "../../../../services/restaurant-data";
const ReviewCard = () => {
  const { restaurantInfo, loading } = useGetRestaurant();
  console.log(restaurantInfo?.length);
  

  return (
    <div >
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <Spinner />
        </div>
      ) : restaurantInfo?.length ? (
        restaurantInfo.map((info) => {
          return <div className="card">
              {
                info.images.map((each,index)=>{
            return <img src={each} alt="" className="res-image" key={index} />
                })
              }
            <div className="content">
              <div className="name-rate">
                <div className="name">
                  <h1>{info.name}</h1>
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
                  // info.services.map((ser) => {
                  //   return <div className="case">
                  //     <img src={ser.ServiceIcon} width={50} height={50} />
                  //     <span>{ser.ServiceName}</span>
                  //   </div>
                  // })
                }

              </div>
              <div className="feedback">
                <ChatTeardropText size={24} color="#050505" weight="thin" />
                <span>{info.phoneNumber}</span>
              </div>
            </div>
          </div>
        })
      ) : (
        <div className="no-results">
          <p>No results found</p>
        </div>
      )
      }
    </div>
  )
}
export default ReviewCard;
