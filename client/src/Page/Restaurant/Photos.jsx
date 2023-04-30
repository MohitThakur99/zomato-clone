import React, { useState } from 'react'
import ImageViewer from 'react-simple-image-viewer';

// components
import PhotosCollection from "../../components/Restaurant/PhotosCollection"

const Photos = () => {
    const [photos,setPhotos] = useState([
        "https://b.zmtcdn.com/data/reviews_photos/f64/19ce6f88fa2e178cf56875abf91bff64_1554055648.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/reviews_photos/f64/19ce6f88fa2e178cf56875abf91bff64_1554055648.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/reviews_photos/f64/19ce6f88fa2e178cf56875abf91bff64_1554055648.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/reviews_photos/f64/19ce6f88fa2e178cf56875abf91bff64_1554055648.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/reviews_photos/f64/19ce6f88fa2e178cf56875abf91bff64_1554055648.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/reviews_photos/f64/19ce6f88fa2e178cf56875abf91bff64_1554055648.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/reviews_photos/f64/19ce6f88fa2e178cf56875abf91bff64_1554055648.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/reviews_photos/f64/19ce6f88fa2e178cf56875abf91bff64_1554055648.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/reviews_photos/f64/19ce6f88fa2e178cf56875abf91bff64_1554055648.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/reviews_photos/f64/19ce6f88fa2e178cf56875abf91bff64_1554055648.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    ])
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [CurrImg, setCurrImg] = useState(0)
    const closeViewer = () => setIsMenuOpen(false)
    const openViewer = () => setIsMenuOpen(true)

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