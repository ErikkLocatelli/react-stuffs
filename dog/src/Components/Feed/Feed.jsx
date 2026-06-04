import React, { useEffect, useState } from 'react'

import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'
import useFetch from '../../Hooks/UseFetch'
import Loading from '../Helpers/Loading'
import Error from '../Helpers/Error'

import { PHOTOS_GET } from '../../Helpers/api'

const Feed = ({user}) => {
  const [modalPhoto, setModalPhoto] = useState(null)
  const [page, setPage] = useState(1)
  const [photos, setPhotos] = useState([]);
  const [infinite, setInfinite] = useState(true)

  const { error, loading, request } = useFetch()

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({
        page,
        total: 3,
        user,
      });

      const { response, json } = await request(url, options);

      if (response) {
        setPhotos((prev) => [...prev, ...json]);

        if (json.length < 3) {
          setInfinite(false);
        }
      }
      }

      fetchPhotos();
    }, [page, user, request]);

  useEffect(() => {
    const infiniteScroll = () => {
      if (loading || !infinite) return;

      const y = window.scrollY;
      const height =
        document.body.offsetHeight - window.innerHeight;

      if (y > height * 0.75) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [loading, infinite]);

  return (
    <>
      <FeedPhotos
        photos={photos}
        setModalPhoto={setModalPhoto}
      />

      {loading && <Loading />}

      {error && <Error message={error} />}

      {!infinite && (
        <p>Não há mais imagens para carregar...</p>
      )}
    </>
  );
}

export default Feed