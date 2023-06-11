import "./review-card.css";
import { Star, ChatTeardropText, Spinner } from "@phosphor-icons/react";
import useGetRestaurant from "../../../../services/restaurant-data";
import HeroSlider, { Slide } from "hero-slider";
import { IRestaurant } from "../.../../../../../interfaces/restaurant.interface"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ReviewCard = () => {
  const { restaurantInfo, loading } = useGetRestaurant();
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
      ) : restaurantInfo?.length && restaurantInfo?.length !== 10 ? (
        restaurantInfo.map((info) => {
          return <div className="card" key={info._id}>
            <HeroSlider
              autoplay={{ autoplayDuration: 2000 }}
              accessability={{ shouldDisplayButtons: false, shouldSlideOnArrowKeypress: false }}
              width={200}
              height={238}
              controller={{
                initialSlide: 1,
                slidingDuration: 200,
                slidingDelay: 100,
              }}
            >
              {
                info.images.map((each, index) => {
                  return <Slide
                    key={index}
                    label="Giau Pass - Italy"
                    background={{
                      backgroundImageSrc: each,
                    }}
                  />
                })
              }
            </HeroSlider>
            <div className="content">
              <div className="name-rate">
                <div className="name">
                  <h1>{info.name}</h1>
                  <p></p>
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
                  info.services?.map((ser, index) => {
                    return <div className="case">
                      <FontAwesomeIcon icon={IRestaurant.ServiceInfo[ser]?.icon}></FontAwesomeIcon>
                      <span className="service-name">{IRestaurant.ServiceInfo[ser]?.name}</span>
                    </div>
                  })
                }
              </div>
              <div className="feedback">
                <ChatTeardropText size={24} color="#050505" weight="thin" />
                <p>{info.address}</p>
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
