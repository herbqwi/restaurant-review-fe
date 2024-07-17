import { useContext, useEffect, useMemo, useState } from "react";
import { IRestaurant } from "../../../interfaces/restaurant.interface";
import { UserContext } from "../../../contexts/user.context";
import restaurantController from "../../../controllers/restaurant.controller";
import ContentContainer from "../../../pages/settings/content-container/content-container.component";
import Map from "../../restaurant-details/map/map.component";
import Input from "../../common/input/input.component";
import { Locations, restaurantTypes, services } from "../../../data/data-index";
import ImageUpload from "../../common/image-upload/image-upload.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
const UpdateRestaurant = () => {
  const [formData, setFormData] = useState({ name: '' });


  const [base64Image, setBase64Image] = useState([]);
  const { user } = useContext(UserContext);
  const { section, id, selectedElement } = useParams();
  const [restaurant, setRestaurant] = useState<IRestaurant.RestaurantData>({
    name: '',
    address: '',
    phoneNumber: '',
    description: '',
    images: [],
    services: [],
    city: IRestaurant.City.HEBRON,
    ownerId: "",
    location: { latitude: 0, longitude: 0 },
    cuisine: IRestaurant.Cuisine.SEA_FOOD
  });

  const [ServiceAvalibale, setServiceAvalibale] = useState<IRestaurant.Service[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await restaurantController.getRestaurantByOwnerIDandName(user.value?._id || "", selectedElement || "");
      if (response && response.data && Array.isArray(response.data) && response.data.length > 0) {
        const restaurantData = response.data[0];
        setRestaurant(restaurantData);
        setServiceAvalibale(restaurantData?.services)
        setBase64Image(restaurantData.images)
        setGPS(restaurantData.location);



      }
    };


    fetchData();


  }, []);

  useEffect(() => {
    setRestaurant({ ...restaurant, images: base64Image })

  }, [base64Image])



  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setRestaurant((prevState: any) => ({
      ...prevState,
      [name]: value
    }));

  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    setRestaurant({ ...restaurant });
    await restaurantController.updateRestaurant(restaurant._id || "", restaurant)
    console.log('Submitted:', restaurant)

  };

  const handleCheck = (service: IRestaurant.Service) => {
    const serviceIndex = ServiceAvalibale.findIndex((iservice: IRestaurant.Service) => iservice === service);

    if (serviceIndex === -1) {
      ServiceAvalibale.push(service);
    } else {
      ServiceAvalibale.splice(serviceIndex, 1);
    }

    setRestaurant({ ...restaurant, services: ServiceAvalibale })
  };


  const [GPS, setGPS] = useState<IRestaurant.Location>({ latitude: 31.947351, longitude: 35.227163 });

  const handleLoc = (gps: IRestaurant.Location) => {
    setGPS({ latitude: gps.longitude, longitude: gps.latitude });
  };

  useEffect(() => {
    restaurant.location = GPS;
  }, [GPS]);

  function checkServiceExistence(service: IRestaurant.Service) {
    for (let i = 0; i < ServiceAvalibale.length; i++) {
      if (ServiceAvalibale[i] === service) {
        return true;
      }
    }
    return false;
  }




  return (restaurant &&

    <form onSubmit={handleSubmit}>
      <ContentContainer title="اعدادات مطاعمي المتاحة" subtitle="اجعل الاخرين يعرفونك بشكل افضل" savable={true}>
        <div className='map-container'>
          <Map location={GPS} prev={GPS} gps={handleLoc} clickable={true}></Map>
        </div>
        <hr />
        <div>
          <Input required name="name" onChange={handleInputChange} label='اسم المطعم' defaultValue={restaurant?.name}></Input>
          <Input required name="description" onChange={handleInputChange} defaultValue={restaurant?.description} label='وصف المطعم'></Input>
        </div>
        <div>
          <Input required onChange={handleInputChange} name="address" defaultValue={restaurant?.address} label='العنوان'></Input>
          <Input required type="number" name="phoneNumber" defaultValue={restaurant?.phoneNumber} onChange={handleInputChange} label='رقم الهاتف'></Input>
        </div>
        <div>
          <select id="Location" name="place" className="select-control1" value={restaurant.city} onChange={(e) => {// fix this twice
            setRestaurant({ ...restaurant, city: e.target.value as unknown as IRestaurant.City });
          }}>
            <option disabled value="اختار منطقة">اختار منطقة</option>
            {Object.keys(IRestaurant.CityInfo).map((city: any, index: any) => {
              return <option key={index} value={city}>{IRestaurant.CityInfo[city as IRestaurant.City].arabicName}</option>
            })}
          </select>


          <div>   <select id="Restaurant-Type" value={restaurant.cuisine} name="Restaurant-Type" className="select-control2" onChange={(e) => { // fix this twice
            setRestaurant({ ...restaurant, cuisine: e.target.value as unknown as IRestaurant.Cuisine });
          }}>
            <option disabled >اختر نوع المطعم</option>
            {Object.keys(IRestaurant.CuisineInfo).map((cuisine: any, index: any) => {
              return <option key={index} value={cuisine}>{IRestaurant.CuisineInfo[cuisine as IRestaurant.Cuisine].name}</option>;
            })}
          </select></div>
        </div>
        <div className='flex-shon'>
          <div>
            {/* <ImageUpload controller={{ value: base64Image, set: setBase64Image }}></ImageUpload> */}
          </div>
          <div>
            <div className='service-container'><label htmlFor="ServiceIcon" className="form-label">
              نوع الخدمات التي يقدمها الطعام:
            </label>
              <div className='flex-service'>
                {Object.keys(IRestaurant.ServiceInfo).map((service, index: number) => {
                  return (
                    <div className='div-check' key={index}>
                      <input
                        className={"check"}
                        id={index.toString()}
                        checked={checkServiceExistence(service as unknown as IRestaurant.Service)}
                        type="checkbox"
                        onClick={() => handleCheck(service as unknown as IRestaurant.Service)}
                      />
                      <label htmlFor={index.toString()}>{IRestaurant.ServiceInfo[service as unknown as IRestaurant.Service].name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className='footer'><p><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>تأكد من دقة المعلومات قبل حفظ النموذج</p></div>
      </ContentContainer>
    </form>
  )
}

export default UpdateRestaurant