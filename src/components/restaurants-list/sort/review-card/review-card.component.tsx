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
import { useEffect, useState } from "react";
<<<<<<< HEAD
=======
import { faChevronLeft, faChevronRight, faLocationArrow, faSmog } from "@fortawesome/free-solid-svg-icons";
import ShowTimer from "../../../base/show-timer/show-timer.component";

const degToRad = (degrees: number) => {
  return degrees * (Math.PI / 180);
};

export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const earthRadius = 6371; // Radius of the earth in kilometers

  const dLat = degToRad(lat2 - lat1);
  const dLon = degToRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = (earthRadius * c);
  // Distance in kilometers
  return (distance.toFixed(2));
};

>>>>>>> development
const ReviewCard = () => {
  const [currentLocation, setCurrentLocation] = useState<{ lat: number, long: number }>({ lat: 0, long: 0 });
  const { restaurantInfo, loading } = useGetRestaurant(currentLocation);
  const [currentPage, setCurrentPage] = useState(1);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
<<<<<<< HEAD
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, long: 0 });
=======
>>>>>>> development
  const itemsPerPage = 3;
  const navigate = useNavigate();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
<<<<<<< HEAD
  const currentItems = restaurantInfo?.slice(indexOfFirstItem, indexOfLastItem);  
=======
  const currentItems = restaurantInfo?.slice(indexOfFirstItem, indexOfLastItem);
>>>>>>> development
  useEffect(() => {
    // Fetch current location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
<<<<<<< HEAD
        (position:any) => {
          const d = position.coords.latitude;          
=======
        (position: any) => {
          const d = position.coords.latitude;
>>>>>>> development
          const b = position.coords.longitude;
          setLat(d);
          setLong(b);
          setCurrentLocation({ lat: d, long: b });

<<<<<<< HEAD
          console.log(d-b,"kd");
          
=======
          console.log(d - b, "kd");

>>>>>>> development
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);
<<<<<<< HEAD

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const earthRadius = 6371; // Radius of the earth in kilometers

    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) ;
    const distance = (earthRadius * c)  ; 
// Distance in kilometers
    return (distance.toFixed(2));
  };
  const degToRad = (degrees: number) => {
    return degrees * (Math.PI / 180);
  };
=======
>>>>>>> development
  console.log(lat);
  return (
    < >
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
<<<<<<< HEAD
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
                  <h5>{calculateDistance(currentLocation.lat,
                    currentLocation.long,info.location.latitude,info.location.longitude)} كم</h5>
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
=======
        currentItems.map((info, i) => {
          return <ShowTimer timeout={50 * i}>
            <div onClick={() => { navigate(`/restaurant-details/${info._id}`) }} className="card" key={info._id}>
              <HeroSlider
                key={info._id + '-slider'}
                autoplay={{ autoplayDuration: 1000, autoplayDebounce: 0 }}
                accessability={{ shouldDisplayButtons: false, shouldSlideOnArrowKeypress: false }}
                width={190}
                height={190}
                style={{ borderRadius: "5px", margin: "20px" }}
                controller={{
                  initialSlide: 1,
                }}
              >
>>>>>>> development
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
                    <h5><FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>{calculateDistance(currentLocation.lat,
                      currentLocation.long, info.location.latitude, info.location.longitude)} كم</h5>
                    <p></p>
                  </div>
                  <div className="rate">
                    <div className="star">
                      <StarsRating rating={calculateAvgStars(info)} count={info.reviews?.length || 0} showText={true} rtl></StarsRating>
                    </div>
                  </div>
                </div>
                <div className="status-container">
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
                </div>
                <div className="feedback">
                  <ChatTeardropText size={24} color="#050505" weight="thin" />
                  <TextPrinter reviews={info.reviews || []} />
                </div>
              </div>
            </div>
          </ShowTimer>
        })

      ) : (
        <div className="no-results">
          <p>No results found</p>
        </div>
      )
      }
      <div className="pagination-container">
        <div className="border"></div>
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(prevPage => prevPage - 1)}
            disabled={currentPage === 1}
            className="pre"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <p>{currentPage}</p>
          <button
            onClick={() => setCurrentPage(prevPage => prevPage + 1)}
            disabled={indexOfLastItem >= restaurantInfo?.length}
            className="next"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
        <div className="border"></div>
      </div>
    </>
  )
}
export default ReviewCard;
