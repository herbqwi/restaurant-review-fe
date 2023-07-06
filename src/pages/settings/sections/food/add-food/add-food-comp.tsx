import './add-food.css';
import { FormEvent, useEffect, useState } from 'react';
import { IRestaurant } from '../../../../../interfaces/restaurant.interface';
import Input from '../../../../../components/common/input/input.component';
import { foodCategories } from '../../../../../data/data-index';
import ContentContainer from '../../../content-container/content-container.component';
import foodController from '../../../../../controllers/food.controller';
import ImageUpload from '../../../../../components/common/image-upload/image-upload.component';
import { useParams } from 'react-router-dom';
import restaurantController from '../../../../../controllers/restaurant.controller';

const AddFood = () => {
    const [base64Image, setBase64Image] = useState([]);
    const { section, id, selectedElement } = useParams();
    const [Food, setFood] = useState<IRestaurant.MenuItem>({
        name: "",
        RestaurantID: selectedElement || "",
        description: "",
        ingredients: [],
        images: [],
        price: 0,
        calories: 0,
        category: "لحوم",
    });
    const [Ingredients, setIngredients] = useState<string[]>([]);
    useEffect(() => {

        setFood({ ...Food, ingredients: [...Ingredients], images: base64Image })

    }, [Ingredients, base64Image])

    const handleAddIngredient = () => {
        const ingredientInput = document.getElementById("ingredient-input") as HTMLInputElement;



        if (ingredientInput.value !== "") {
            setIngredients([ingredientInput.value, ...Ingredients]);
            ingredientInput.value = "";
        }



    };

    const handleIngredientRemove = (index: number) => {
        const newIngredients = [...Ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    };



    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFood((prevState: any) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
   
        setFood({ ...Food });
        await foodController.createNewFood(Food, id || "", selectedElement || "");
    };

    const keyDownHandler = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            handleAddIngredient();
        }
    };


    return <form onSubmit={handleSubmit}>
        <div className='button-container'>
            <button className='save-button' type='submit'>حفظ</button>
        </div>
        <ContentContainer title="واجهة اضافة طعام للمطعم المحدد" subtitle="قم باضافة اشهى الاطعمه" savable={true}>
            <div>
                <Input required name="name" onChange={handleInputChange} label='اسم الطعام'></Input>
                <Input  required name="description" maxlength="30" onChange={handleInputChange} label='وصف الطعام'></Input>
            </div>
            <div>
                <Input required type="number" onChange={handleInputChange} name="price" label='سعر'></Input>
                <Input required type="number" name="calories" onChange={handleInputChange} label='سعرات الحراريه'></Input>
            </div>
            <div>
                <div>
                    <div className='CAT-LAB'><label htmlFor="">اختار نوع الطعام</label>   <select id="food-Type" name="category" className="select-control2" onChange={(e) => {
                        setFood({ ...Food, category: e.target.value });
                    }}>
                        <option disabled >اختر نوع طعام</option>
                        {foodCategories.map((type: any, index: any) => {
                            return <option key={index} value={type.arabic}>{type.arabic}</option>;
                        })}
                    </select></div>
                    <div className='food-img'>
                        <ImageUpload controller={{ value: base64Image, set: setBase64Image }}></ImageUpload>
                    </div>
                </div>
                <div className='ingredients'>
                    <div className="ingredients-container">
                        <div className='ing-info'>
                            <Input label="المكونات:"  type="text"  id="ingredient-input" onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => keyDownHandler(event)}  className="ingredients-input" placeholder="اضف المكونات هنا..." />
                            <button type="button" className="ingredients-add-button" onClick={handleAddIngredient}>+</button>

                        </div>
                        <div className="ingredients-list">
                            {Ingredients.map((ingredient, index) => (
                                <div key={index} className="ingredients-item">
                                    <span>{ingredient}</span>
                                    <button type="button" className="ingredients-remove-button" onClick={() => handleIngredientRemove(index)}>حذف</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ContentContainer>
    </form>
}

export default AddFood;