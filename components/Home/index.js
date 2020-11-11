import React, {
  Fragment,
  memo,
  useEffect,
} from 'react';
import { Spinner } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAppContext } from '../AppContext';
import { getPopular } from '../../services/rest.service';
import markResponseVideos from '../../utils/mark-response-videos';
import asyncLocalStorage from '../../services/local-storage.service';
import error from '../../utils/error';
import config from '../../config';
import List from '../List';
import style from './style.module.scss';

const Home = () => {
  const {
    movies,
    setMovies,
    isLoading,
    moviePages,
    searchString,
    setIsLoading,
    setMoviePages,
  } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    const loadData = async() => {
      try {

        setIsLoading(true);

        let pageId;
        if (router.query.query) {
          pageId = 1;
        } else {
          pageId = router.query.id;
        }

        const userStorage = await asyncLocalStorage.getItem(config.keyLocalStorage);
        const user = JSON.parse(userStorage);

        const data = await getPopular(pageId, config.typeVideos.movie);

        const markedVideos = markResponseVideos(data.results, user?.moviesLibrary);

        setMovies(markedVideos);
        setMoviePages({
          page: data.page,
          totalPage: data.total_pages,
        });

        setIsLoading(false);

      } catch (e) {
        error(e);
        setIsLoading(false);
      }
    }
    loadData();

  }, [
    setMovies,
    router.query.id,
    router.query.query,
    setIsLoading,
    setMoviePages,
  ]);

  return (
    <Fragment>
      {!isLoading
      ? <div
        className={style['page']}>

          <List
          data={movies}
          detailsUrl={config.routes.movie.url}
          paginationUrl={config.routes.movie.paginationPage}
          activePage={moviePages.page}
          totalPage={moviePages.totalPage}
          typeVideo={config.typeVideos.movie} />

        </div>

      : <div
        className={style['page']}>

          <Spinner
          animation='border'
          variant='secondary' />

        </div>

      }

    </Fragment>

  );
}

export default memo(Home);
