import FeedPhotosItem from './FeedPhotosItem'

import styles from './FeedPhotos.module.css'

const FeedPhotos = ({ photos, setModalPhoto }) => {

  return (
    <ul className={styles.feed}>
      {photos.map((photo, index) => (
        <FeedPhotosItem
          key={index}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </ul>
  );
};

export default FeedPhotos
