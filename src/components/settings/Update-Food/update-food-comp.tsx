import { useState, useEffect } from "react";
import "./updateFood.css"
import { useParams } from "react-router";
import ImageUpload from "../../common/image-upload/image-upload.component";
import foodController from "../../../controllers/food.controller";
import { foodCategories } from "../../../data/data-index";
import { IRestaurant } from "../../../interfaces/restaurant.interface";
import ContentContainer from "../../../pages/settings/content-container/content-container.component";
import Input from "../../common/input/input.component";

const UpdateFood = (Foodinfo: any) => {
    const foodID = Foodinfo.Foodinfo[0].id || ""
    console.log(foodID);
    const [base64Image, setBase64Image] = useState([]);
    const { section, id, selectedElement } = useParams();
    const [Food, setFood] = useState<IRestaurant.MenuItem>({
        name: "",
        restaurantId: selectedElement || "",
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
        await foodController.UpdataFood(selectedElement || "", Food);
    };

    const keyDownHandler = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            handleAddIngredient();
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await foodController.getFoodByrestaurantID(selectedElement || "", foodID || "")
            if (response && response.data && Array.isArray(response.data) && response.data.length > 0) {
                const foodData = response.data[0];
                setFood(foodData);
                setBase64Image(foodData.images)
                setIngredients(foodData.ingredients);

            }
        };

        fetchData();


    }, []);
    console.log(Food);

    return <section>{Food &&
        <div>
            <ContentContainer title="واجهة تعديل طعام للمطعم المحدد" subtitle="قم باضافة اشهى الاطعمه" savable={true} handleSubmit={handleSubmit}>
                <div>
                    <Input required name="name" onChange={handleInputChange} value={Food.name} label='اسم الطعام'></Input>
                    <Input required name="description" maxlength="50" onChange={handleInputChange} value={Food.description} label='وصف الطعام'></Input>
                </div>
                <div>
                    <Input required type="number" onChange={handleInputChange} value={Food.price} name="price" label='سعر'></Input>
                    <Input required type="number" name="calories" onChange={handleInputChange} value={Food.calories} label='سعرات الحراريه'></Input>
                </div>
                <div>
                    <div>
                        <div className='CAT-LAB'><label htmlFor="">اختار نوع الطعام</label>   <select value={Food.category} id="food-Type" name="category" className="select-control2" onChange={(e) => {
                            setFood({ ...Food, category: e.target.value });
                        }}>
                            <option disabled >اختر نوع طعام</option>
                            {foodCategories.map((type: any, index: any) => {
                                return <option key={index} value={type.arabic}>{type.arabic}</option>;
                            })}
                        </select></div>
                        <div className='food-img'>
                            {/* <ImageUpload controller={{ value: Food.images, set: setBase64Image }}></ImageUpload> */}
                        </div>
                    </div>
                    <div className='ingredients'>
                        <div className="ingredients-container">
                            <div className='ing-info'>
                                <Input label="المكونات:" type="text" id="ingredient-input" onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => keyDownHandler(event)} className="ingredients-input" placeholder="اضف المكونات هنا..." />
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
        </div>
    }
    </section>
}

export default UpdateFood;