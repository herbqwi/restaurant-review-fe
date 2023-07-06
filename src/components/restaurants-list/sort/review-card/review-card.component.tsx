import "./review-card.css";
import { Star, ChatTeardropText, Spinner, CaretLeft, CaretRight } from "@phosphor-icons/react";
import useGetRestaurant from "../../../../services/restaurant-data";
import HeroSlider, { Slide } from "hero-slider";
import { IRestaurant } from "../.../../../../../interfaces/restaurant.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import StarsRating from "../../../common/stars-rating/stars-rating.component";
import { calculateAvgStars } from "../../../../services/pages/restaurant-details/restaurant-details.service";
import TextPrinter from "../../../printText/print-text.component";
import { useState } from "react";
const ReviewCard = () => {
  const { restaurantInfo, loading } = useGetRestaurant();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const navigate = useNavigate();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = restaurantInfo?.slice(indexOfFirstItem, indexOfLastItem);  
  
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
        currentItems.map((info) => {
          return <div onClick={() => { navigate(`/restaurant-details/${info._id}`) }} className="card" key={info._id}>
            <HeroSlider
              key={info._id + '-slider'}
              autoplay={{ autoplayDuration: 1000, autoplayDebounce: 0 }}
              accessability={{ shouldDisplayButtons: false, shouldSlideOnArrowKeypress: false }}
              width={190}
              height={190}
              style={{borderRadius:"5px",margin:"20px"}}
              controller={{
                initialSlide: 1,
              }}
            >
              {
                info.images.map((each, index) => {
                  return <Slide
                    key={index}
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
                    return <div className="case" key={index}>
                      <FontAwesomeIcon icon={IRestaurant.ServiceInfo[ser]?.icon} size="lg"></FontAwesomeIcon>
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
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(prevPage => prevPage - 1)}
          disabled={currentPage === 1}
          className="pre"
        >
          <CaretRight size={25} weight="thin" />
        </button>
        <button
          onClick={() => setCurrentPage(prevPage => prevPage + 1)}
          disabled={indexOfLastItem >= restaurantInfo?.length}
          className="next"
        >
          <CaretLeft size={25} weight="thin" />
        </button>
      </div>
    </div>
  )
}
export default ReviewCard;
