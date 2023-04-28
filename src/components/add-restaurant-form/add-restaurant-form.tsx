import React, { useState, useEffect } from 'react';
import './add-restaurant-form.css';
import { Locations, restaurantTypes, services } from '../../data/data-index'
import CreateRestaurant from '../../services/Restaurant';

interface IService {
    ServiceName: string;
    ServiceIcon: string;
}

export interface RestaurantData {
    Name: string;
    Address: string;
    Phone: string;
    Description: string;
    Images: File[];
    Service: IService[];
    ResType: string;
    Location: string;
    clicked: boolean;
    ImagePreviews: string[];
}

function AddRestaurantForm() {
    const [ServiceAvalibale, setServiceAvalibale] = useState<{ ServiceName: string, ServiceIcon: string }[]>([]);
    const [restaurant, setRestaurant] = useState<RestaurantData>({
        Name: '',
        Address: '',
        Phone: '',
        Description: '',
        ResType: "إيطالي",
        Images: [],
        Service: [],
        Location: 'الخليل',
        clicked: false,
        ImagePreviews: []
    });

    useEffect(() => {
        setRestaurant({ ...restaurant, Images: [] });
    }, [restaurant.clicked, ServiceAvalibale]);

    const handleCheck = (name: string, icon: string) => {
        const serviceIndex = ServiceAvalibale.findIndex((service) => service.ServiceName === name);

        if (serviceIndex === -1) {
            ServiceAvalibale.push({  ServiceName: name, ServiceIcon: icon });
        } else {
            ServiceAvalibale.splice(serviceIndex, 1);
        }

        setRestaurant({...restaurant,Service:ServiceAvalibale})
        console.log(ServiceAvalibale);
    };


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setRestaurant({ ...restaurant, clicked: true });
        event.preventDefault();
        const addRestuResponse =await CreateRestaurant(restaurant)
          if (addRestuResponse)
            console.log('Submitted:', restaurant);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setRestaurant(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const imagesArray = Array.from(files).map(file => URL.createObjectURL(file));
            setRestaurant(prevState => ({
                ...prevState,
                Images: prevState.Images.concat(Array.from(files)),
                ImagePreviews: prevState.ImagePreviews.concat(imagesArray)
            }));
        }
    };

    const deleteImagePreview = (index: number) => {
        const updatedPreviews = [...restaurant.ImagePreviews];
        updatedPreviews.splice(index, 1);
        setRestaurant(prevState => ({
            ...prevState,
            ImagePreviews: updatedPreviews,
            Images: prevState.Images.filter((image, i) => i !== index)
        }));
    };
    return (
        <form onSubmit={handleSubmit} className="add-restaurant-form">
            <h2 className="form-header"> واجهة إضافة مطعم جديد</h2>

            <div className="form-group">
                <label htmlFor="Name" className="form-label">اسم المطعم:</label>
                <input required type="text" id="Name" name="Name" value={restaurant.Name} onChange={handleInputChange} className="form-control" />
            </div>

            <div className="form-group">
                <label htmlFor="Location" className="form-label">المنطقة:</label>
                <select id="Location" name="Location" className="form-control" onChange={(e) => {
                    setRestaurant({ ...restaurant, Location: e.target.value });
                }}>
                    <option disabled value="اختار منطقة">اختار منطقة</option>
                    {Locations.map((loc: any, index: any) => {
                        return <option key={index} value={loc}>{loc}</option>
                    })}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="Address" className="form-label">العنوان:</label>
                <input required type="text" id="Address" name="Address" value={restaurant.Address} onChange={handleInputChange} className="form-control" />
            </div>

            <div className="form-group">
                <label htmlFor="Phone" className="form-label">رقم الهاتف:</label>
                <input required type="number" id="Phone" name="Phone" maxLength={9} minLength={0} value={restaurant.Phone} onChange={handleInputChange} className="form-control" />
            </div>

            <div className="form-group">
                <label htmlFor="Description" className="form-label">وصف المطعم:</label>
                <textarea id="Description" name="Description" value={restaurant.Description} onChange={handleInputChange} className="form-control" />
            </div>

            <div className="form-group">
                <label htmlFor="Restaurant-Type" className="form-label">نوع المطعم:</label>
                <select id="Restaurant-Type" name="Restaurant-Type" className="form-control" onChange={(e) => {
                    setRestaurant({ ...restaurant, ResType: e.target.value });
                }}>
                    <option disabled >اختر نوع المطعم</option>
                    {restaurantTypes.map((type: any, index: any) => {
                        return <option key={index} value={type}>{type}</option>;
                    })}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="ServiceIcon" className="form-label">
                    نوع الخدمات التي يقدمها الطعام:
                </label>
                {services.map((service: any, index: any) => {
                    return (
                        <div className='div-cheak' key={index} >

                            <input className={"check"} id={index.toString()} type="checkbox" onClick={() => handleCheck(service.serviceName, service.serviceIcon)}>
                            </input>
                            <label htmlFor={index.toString()}>{service.serviceName}{service.serviceIcon}</label>
                        </div>
                    );
                })}
            </div>

            <div className="form-group">
                <div className="upload-btn-wrapper">
                    <button className="btn">
                        <span className="btn-icon">+</span> اختر صورة
                    </button>
                    <input type="file" id="Image" name="Image" onChange={handleFileChange} />
                </div>
                <div className="image-previews">
                    {restaurant.ImagePreviews.map((preview, index) => (
                        <div key={index} className="image-preview">
                            <img src={preview} alt="Restaurant" className="preview-image" />
                            <button type="button" onClick={() => deleteImagePreview(index)} className="delete-button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        fill="#333"
                                        d="M19.707 4.293a1 1 0 0 0-1.414 0L12 10.586 5.707 4.293a1 1 0 0 0-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414L12 13.414l6.293 6.293a1 1 0 0 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 0 0 0-1.414z"
                                    />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <button type="submit" className="submit-button">إضافة مطعم</button>
            {

                restaurant.clicked ? <div className="success-message">
                    <span className="close" onClick={() => setRestaurant({
                        Name: '',
                        Address: '',
                        Phone: '',
                        Description: '',
                        Images: [],
                        ResType: '',
                        Service: [],
                        Location: '',
                        clicked: false,
                        ImagePreviews: []

                    })}>×</span>
                    <p>تم إضافة المطعم بنجاح!</p>
                </div> : null
            }
        </form>
    );
}

export default AddRestaurantForm;

function sync(event: Event | undefined, arg1: any) {
    throw new Error('Function not implemented.');
}
