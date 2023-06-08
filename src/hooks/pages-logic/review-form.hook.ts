import { useContext, useState } from "react";
import { UserContext } from "../../contexts/login.context";
import useToggle from "../toggle.hook";
import { IRestaurant } from "../../interfaces/restaurant.interface";
import restaurantController from "../../controllers/restaurant.controller";


export const useReview = (restaurantId: string) => {

    const { userId } = useContext(UserContext);

    const [content, setContent] = useState(``);
    const [positive, setPositive] = useState(``);
    const [negative, setNegative] = useState(``);
    const [company, setCompany] = useState(IRestaurant.Company.FAMILY);
    const [isDetailed, toggleDetailed] = useToggle(false);
    const [starsReview, setStarsReview] = useState<number>(0);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await restaurantController.addReview(restaurantId, { company, content, positive, negative, starRating: starsReview, userId })
        console.log(`added`);
    };

    return {
        content: { value: content, set: setContent }, positive: { value: positive, set: setPositive },
        negative: { value: negative, set: setNegative }, company: { value: company, set: setCompany },
        isDetailed: { value: isDetailed, toggle: toggleDetailed }, starsReview: { value: starsReview, toggle: setStarsReview }
        , handleSubmit
    }
}