import FeedPhotosItem from './FeedPhotosItem'

import styles from './FeedPhotos.module.css'

const FeedPhotos = ({ photos, setModalPhoto }) => {
    console.log(photos)

  return (
    <ul className={styles.feed}>
      {photos.map((photo) => (
        <FeedPhotosItem
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </ul>
  );
};

export default FeedPhotos
