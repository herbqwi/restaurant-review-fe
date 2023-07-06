import React, { useContext, useEffect } from 'react'
import { Locations, restaurantTypes, services } from '../../../../data/data-index';
import { useState } from 'react';
import restaurantController from "../../../../controllers/restaurant.controller"
import Input from '../../../../components/common/input/input.component';
import Map from '../../../../components/restaurant-details/map/map.component';
import ContentContainer from '../../content-container/content-container.component';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRestaurant } from '../../../../interfaces/restaurant.interface';
import ImageUpload from '../../../../components/common/image-upload/image-upload.component';
import { UserContext } from '../../../../contexts/user.context';
const Restaurant = () => {
    const [ServiceAvalibale, setServiceAvalibale] = useState<IRestaurant.Service[]>([]);
    const [base64Image, setBase64Image] = useState([]);
    const { user } = useContext(UserContext);
    const [restaurant, setRestaurant] = useState<IRestaurant.RestaurantData1>({
        name: '',
        address: '',
        phoneNumber: '',
        description: '',
        restaurantType: "إيطالي",
        images: [],
        services: [],
        place: 'الخليل',
        location: [],
        ownerId: ""

    });


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setRestaurant(prevState => ({
            ...prevState,
            [name]: value
        }));

    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setRestaurant({ ...restaurant });
        console.log('Submitted:', restaurant)
        await restaurantController.createNewRestaurant(restaurant)

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

    const [GPS, setGPS] = useState<{ lat: number; lng: number }[]>([]);
    const handleLoc = (gps: IRestaurant.Location) => {
        setGPS([{ lat: gps.lat, lng: gps.lng }]);
    };
    useEffect(() => {
        restaurant.location = GPS || [{ lat: 31.947351, lng: 35.227163 }]
    }, [GPS])

    useEffect(() => {
        setRestaurant({ ...restaurant, images: base64Image, ownerId: user.value?._id || "fake1230012312asdasd12312" })
    }, [])




    return (
        <form onSubmit={handleSubmit}>
            <div className='button-container'>
                <button className='save-button' type='submit'>حفظ</button>

            </div>
            <ContentContainer title="اعدادات مطاعمي المتاحة" subtitle="عرف الاخرين عن نفسك" savable={true}>
                <div className='map-container'>
                    <Map location={{ latitude: 31.947351, longitude: 35.227163 }} gps={handleLoc} clickable={true} prev={""}></Map>
                </div>
                <hr />
                <div>
                    <Input name="name" onChange={handleInputChange} label='اسم المطعم'></Input>
                    <Input name="description" onChange={handleInputChange} label='وصف المطعم'></Input>
                </div>
                <div>
                    <Input onChange={handleInputChange} name="address" label='العنوان'></Input>
                    <Input required type="number" name="phoneNumber" onChange={handleInputChange} label='رقم الهاتف'></Input>
                </div>
                <div>
                    <select id="Location" name="place" className="select-control1" onChange={(e) => {
                        setRestaurant({ ...restaurant, place: e.target.value });
                    }}>
                        <option disabled value="اختار منطقة">اختار منطقة</option>
                        {Locations.map((loc: any, index: any) => {
                            return <option key={index} value={loc}>{loc}</option>
                        })}
                    </select>


                    <div>   <select id="Restaurant-Type" name="Restaurant-Type" className="select-control2" onChange={(e) => {
                        setRestaurant({ ...restaurant, restaurantType: e.target.value });
                    }}>
                        <option disabled >اختر نوع المطعم</option>
                        {restaurantTypes.map((type: any, index: any) => {
                            return <option key={index} value={type}>{type}</option>;
                        })}
                    </select></div>
                </div>
                <div className='flex-shon'>
                    <div>
                        <ImageUpload controller={{ value: base64Image, set: setBase64Image }}></ImageUpload>
                    </div>
                    <div>
                        <div className='service-container'><label htmlFor="ServiceIcon" className="form-label">
                            نوع الخدمات التي يقدمها الطعام:
                        </label>
                            <div className='flex-service'>
                                {Object.keys(IRestaurant.ServiceInfo).map((service, index: number) => {
                                    return (
                                        <div className='div-check' key={index} >

                                            <input className={"check"} id={index.toString()} type="checkbox" onClick={() => handleCheck(service as unknown as IRestaurant.Service)}>
                                            </input>
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

export default Restaurant