import './addresturant.css'
import React, { useContext, useEffect } from 'react'
import { Locations, restaurantTypes } from '../../../data/data-index';
import { useState } from 'react';
import restaurantController from '../../../controllers/restaurant.controller';
import Input from '../../../components/common/input/input.component';
import Map from '../../../components/restaurant-details/map/map.component';
import ContentContainer from '../content-container/content-container.component';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRestaurant } from '../../../interfaces/restaurant.interface';
import ImageUpload from '../../../components/common/image-upload/image-upload.component';
import { UserContext } from '../../../contexts/user.context';
import { useNavigate, useParams } from 'react-router';
import ShowTimer from '../../../components/base/show-timer/show-timer.component';
import Button from '../../../components/common/button/button.component';
import { IModal, ModalContext, ModalType } from '../../../contexts/modal.context';
import ConfirmDeleteRestaurantModal from '../../../components/modal/confirm-delete-comment/confirm-delete-restaurant';
import { NotificationContext } from '../../../components/base/notification/notification-container/notification-container.component';
import { NotificationType } from '../../../components/base/notification/notification-body/notification-body.component';
import Select from '../../../components/common/select/select.component';
import { AxiosResponse } from 'axios';

interface IProps {
  setSection: any,
}

const Restaurant = ({ setSection }: IProps) => {
  const [base64Image, setBase64Image] = useState([]);
  const { user } = useContext(UserContext);
  const { selectedElement } = useParams()
  const { pushNotification } = useContext(NotificationContext);
  const { setModalProps } = useContext(ModalContext);
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState<IRestaurant.RestaurantData>({
    name: '',
    address: '',
    phoneNumber: '',
    description: '',
    images: [],
    services: [],
    city: IRestaurant.City.HEBRON,
    ownerId: user.value?._id as string,
    location: { latitude: 31.419288124288357, longitude: 35.05690138345892 },
    cuisine: IRestaurant.Cuisine.ITALIAN
  });

  console.log('restaurant: ', restaurant);

  const confirmDelete = () => {
    const modalProps: IModal = {
      header: {
        title: `تأكيد الأمر`,
      },
      modalType: ModalType.CONFIRM,
      body: <ConfirmDeleteRestaurantModal />,
      submit: async () => {
        const response = await restaurantController.deleteRestaurant(selectedElement as string);
        if (response.status != 200) {
          pushNotification(NotificationType.Failed, 'حدث خطأ اثناء حذف المطعم')
          return;
        }
        pushNotification(NotificationType.Success, 'تم حذف المطعم بنجاح')
        navigate('/settings/restaurants/new')
      }
    }
    setModalProps(modalProps)
  }

  // const handleImageUpload = (newRestaurant: ) => {
  //     // const newRestaurant: IRestaurant.RestaurantData = { ...restaurant, images: [...restaurant.images, img] }
  //     setRestaurant(newRestaurant)
  // }


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setRestaurant(prevState => ({
      ...prevState,
      [name]: value
    }));

  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRestaurant({ ...restaurant });
    if (selectedElement == 'new') {
      const response = await restaurantController.createNewRestaurant(restaurant) as AxiosResponse<IRestaurant.RestaurantData>
      pushNotification(NotificationType.Success, 'تم اضافة مطعم جديد')
      navigate(`/settings/restaurants/${response.data._id}`)
    } else {
      await restaurantController.updateRestaurant(selectedElement as string, restaurant);
      pushNotification(NotificationType.Success, 'تم تحديث المطعم')
    }
  };

  const handleCheck = (service: IRestaurant.Service) => {
    const foundService = restaurant.services.find(iservice => iservice == service);
    console.log(`Found: `, foundService);
    if (!foundService) {
      setRestaurant({ ...restaurant, services: [...restaurant.services, service] })
    } else {
      const filteredServices = restaurant.services.filter(iservice => iservice != service);
      console.log(filteredServices);
      setRestaurant({ ...restaurant, services: filteredServices })
    }
  };

  const handleCompanyCheck = (company: IRestaurant.Company) => {
    const foodCompanies = restaurant.companies?.find(icompany => icompany == company);
    console.log(`Found: `, foodCompanies);
    if (!foodCompanies) {
      if (restaurant.companies && restaurant.companies.length != 0)
        setRestaurant({ ...restaurant, companies: [...restaurant.companies, company] })
      else
        setRestaurant({ ...restaurant, companies: [company] })
    } else {
      const filteredCompanies = restaurant.companies?.filter(iservice => iservice != company);
      console.log(filteredCompanies);
      setRestaurant({ ...restaurant, companies: filteredCompanies })
    }
  };

  useEffect(() => {
    console.log(`Restaruant updated: `, restaurant);
  }, [restaurant]);

  useEffect(() => {
    if (selectedElement && selectedElement != 'new') {
      restaurantController.getRestaurant(selectedElement).then(res => {
        console.log(res.data);
        setRestaurant(res.data);
      })
    } else {
      setRestaurant({ ...restaurant, images: base64Image, ownerId: user.value?._id || "fake1230012312asdasd12312" })
    }
  }, [])

  const saveButtons: {
    name: string,
    onClick: any,
    isSubmit?: boolean
  }[] = [{ name: `حفظ`, onClick: handleSubmit, isSubmit: true }]

  const editButtons: {
    name: string,
    onClick: any,
    isSubmit?: boolean
  }[] = [{ name: `حفظ`, onClick: handleSubmit, isSubmit: true },
      // { name: `عرض الوجبات`, onClick: () => { setSection(2) }, isSubmit: true }, { name: `إضافة الوجبات`, onClick: () => { setSection(1) }, isSubmit: true }
    ]

  const updateCity = (city: IRestaurant.City) => {
    setRestaurant({ ...restaurant, city: city });
  }

  const updateCuisine = (cuisine: IRestaurant.Cuisine) => {
    setRestaurant({ ...restaurant, cuisine: cuisine });
  }


  return (
    <div>
      <ContentContainer title="اعدادات مطاعمي المتاحة" subtitle="عرف الاخرين عن مطعمك" savable={true} buttons={selectedElement == 'new' ? saveButtons : editButtons}>
        <div className='map-container'>
          <Map location={restaurant.location} gps={(loc: IRestaurant.Location) => setRestaurant(oldRestaurant => ({ ...oldRestaurant, location: loc }))} clickable={true} prev={restaurant.location}></Map>
        </div>
        <hr />
        <div>
          <Input name="name" value={restaurant.name} onChange={handleInputChange} label='اسم المطعم'></Input>
          <Input name="description" value={restaurant.description} onChange={handleInputChange} label='وصف المطعم'></Input>
        </div>
        <div>
          <Input onChange={handleInputChange} name="address" value={restaurant.address} label='العنوان'></Input>
          <Input required type="number" name="phoneNumber" value={restaurant.phoneNumber} onChange={handleInputChange} label='رقم الهاتف'></Input>
        </div>
        <div>
          <Select id="Location" label="المدينة" name="place" className="select-control1" controller={{ value: restaurant.city, set: updateCity }} options={Object.keys(IRestaurant.CityInfo).map((cityInfo) => ({ value: cityInfo, content: IRestaurant.CityInfo[Number(cityInfo) as IRestaurant.City]?.arabicName }))} defaultValue='المدينة'></Select>
          <Select id="Location" label="الصنف" name="cuisine" className="select-control1" controller={{ value: restaurant.cuisine, set: updateCuisine }} options={Object.keys(IRestaurant.CuisineInfo).map((cuisineInfo) => ({ value: cuisineInfo, content: IRestaurant.CuisineInfo[Number(cuisineInfo) as IRestaurant.City]?.name }))} defaultValue='الصنف'></Select>
        </div>
        <div className='flex-shon'>
          <div className='service-container'><label htmlFor="ServiceIcon" className="form-label">
            خدمات المطعم
          </label>
            <div className='flex-service'>
              {Object.keys(IRestaurant.ServiceInfo).map((service, index: number) => {
                return (
                  <div className='div-check' key={index} >

                    <input className={"check"} id={index.toString()} type="checkbox" checked={restaurant.services.includes(service as unknown as IRestaurant.Service)} onClick={() => handleCheck(service as unknown as IRestaurant.Service)}>
                    </input>
                    <label htmlFor={index.toString()}>{IRestaurant.ServiceInfo[service as unknown as IRestaurant.Service].name}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='flex-shon'>
          <div className='service-container'><label htmlFor="ServiceIcon" className="form-label">
            مناسب لـ
          </label>
            <div className='flex-service'>
              {Object.keys(IRestaurant.CompanyInfo).map((company, index: number) => {
                return (
                  <div className='div-check' key={index} >

                    <input className={"check"} id={index.toString()} type="checkbox" checked={restaurant.companies && restaurant.companies.includes(company as unknown as IRestaurant.Company)} onClick={() => handleCompanyCheck(company as unknown as IRestaurant.Company)}>
                    </input>
                    <label htmlFor={index.toString()}>{IRestaurant.CompanyInfo[company as unknown as IRestaurant.Company]}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="upload-container">
          <ImageUpload controller={{ value: restaurant, set: setRestaurant }}></ImageUpload>
        </div>

        <div className='footer'><p><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>تأكد من دقة المعلومات قبل حفظ النموذج</p></div>
      </ContentContainer>
      {selectedElement != 'new' && <ShowTimer timeout={50 + (50 * 2)}><Button className="delete-button" onClick={confirmDelete}>حذف المطعم</Button></ShowTimer>}
    </div>
  )
}

export default Restaurant
