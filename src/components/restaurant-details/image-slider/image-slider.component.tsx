import './image-slider.css'
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

interface IProps {
    images: any[],
    className?: string,
    setSliderShown: any,
}

const ImageSlider = ({ images, className, setSliderShown }: IProps) => {
    const sliderImages = images.map(image => ({ original: image, thumbnail: image }))
    return <>
        <div onClick={() => { setSliderShown(false) }} className={`modal-background-opacity${className ? ` ${className}` : ''}`}></div>
        <div className={`image-slider${className ? ` ${className}` : ''}`}>
            <ReactImageGallery items={sliderImages} />
        </div>
    </>
}

export default ImageSlider;