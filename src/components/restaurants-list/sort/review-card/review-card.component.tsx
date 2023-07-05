import "./review-card.css";
import { Star, ChatTeardropText, Spinner } from "@phosphor-icons/react";
import useGetRestaurant from "../../../../services/restaurant-data";
import HeroSlider, { Slide } from "hero-slider";
import { IRestaurant } from "../.../../../../../interfaces/restaurant.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import StarsRating from "../../../common/stars-rating/stars-rating.component";
import { calculateAvgStars } from "../../../../services/pages/restaurant-details/restaurant-details.service";
import TextPrinter from "../../../printText/print-text.component";
const ReviewCard = () => {
  const { restaurantInfo, loading } = useGetRestaurant();
  const navigate = useNavigate();

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
          return <div onClick={() => { navigate(`/restaurant-details/${info._id}`) }} className="card" key={info._id}>
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
                  <div className="star">
                    <StarsRating rating={calculateAvgStars(info)} count={info.reviews?.length || 0} showText={true}></StarsRating>

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
                <TextPrinter reviews={info.reviews || []} />
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
