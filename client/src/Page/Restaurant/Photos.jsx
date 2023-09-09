import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import ImageViewer from 'react-simple-image-viewer';

// components
import PhotosCollection from "../../components/Restaurant/PhotosCollection"

// redux actions
import { getImage } from '../../Redux/Reducer/Image/Image.action';

const Photos = () => {
    const [photos,setPhotos] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [CurrImg, setCurrImg] = useState(0)
    const openViewer = () => setIsMenuOpen(true);

    const dispatch = useDispatch();
    const reduxState = useSelector(
      (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );

    useEffect(() => {
      if(reduxState){
        dispatch(getImage(reduxState?.photos)).then((data) => {
          const images = [];
          data.payload.image.images.map(({ location }) => images.push(location));
          setPhotos(images);
        });
      }
    },[]);

    const closeViewer = () => setIsMenuOpen(false);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={CurrImg}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeViewer}
        />
      )}

      <div className='flex flex-wrap gap-2'>
        {photos.map((photo) => (
            <PhotosCollection image={photo} openViewer={openViewer} />
        ))}
      </div>
    </>
  )
}

export default Photos