import { useState, useEffect } from "react";
import useToggle from "../toggle.hook"


const useReviewParagraph = (paragraphRef: any) => {
    const [isMinimized, toggleMinimized] = useToggle(true);

    return [{ value: isMinimized, toggle: toggleMinimized }];
}

export const useCustomerReview = (contentRef: any, positiveRef: any, negativeRef: any) => {
    const [isContentMinimized] = useReviewParagraph(contentRef);
    const [isPositiveMinimized] = useReviewParagraph(positiveRef);
    const [isNegativeMinimized] = useReviewParagraph(negativeRef);

    return {
        content: { isMinimized: isContentMinimized },
        positive: { isMinimized: isPositiveMinimized },
        negative: { isMinimized: isNegativeMinimized }
    }
}