/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  Fragment,
  useEffect,
  useState,
  memo,
} from 'react';
import { useRouter } from 'next/router';
import { Spinner } from 'react-bootstrap';
import { HorizontalBar } from 'react-chartjs-2';
import { getPopularById } from '../../services/rest.service';
import error from '../../utils/error';
import config from '../../config';
import style from './style.module.scss';


const CardDetails = () => {
  const [cardDetails, setCardDetails] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const loadData = async() => {
      try {
        let type;
        console.log(router.query.id);
        //const pathSplit = [''];// history.location.pathname.split('/').slice(1);

        type = config.typeVideos.movie;
        const data = await getPopularById(router.query.id, type);
        setCardDetails(data);

      } catch (e) {
        error(e);
      }
    }
    loadData();
  }, [
    router.query.id,
  ]);

  return (
    <Fragment>
      {cardDetails
      ? <div
        className={style['section-card']}>

          <img
          className={style['section-card__image']}
          src={cardDetails ? `${config.baseImgUrl}${cardDetails.poster_path}` : `${config.baseImgUrl}${tvShowDetail.poster_path}`}
          alt={cardDetails ? cardDetails.title : tvShowDetail.name} />

          <div
          className={style['section-card__description']}>
            <h2>{cardDetails ? cardDetails.title : tvShowDetail.name}</h2>
            {cardDetails?.overview || tvShowDetail?.overview}

            <div
            className={style['section-card__graph']}>

              <HorizontalBar data={{
              labels: [cardDetails ? cardDetails.title : tvShowDetail.name],
              datasets: [
                {
                  label: 'Rating',
                  data: [cardDetails ? cardDetails.vote_average : tvShowDetail.vote_average],
                  backgroundColor: 'rgba(49,64,82,0.4)',
                  borderColor: 'rgba(70,95,122,1)',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(49,64,82,0.6)',
                  hoverBorderColor: 'rgba(70,95,122,1)',
                  barThickness: 50,
                },
              ],
            }}
            options={{
              legend: {
                labels: {
                  fontColor: 'rgb(255,255,255)',
                },
              },
              scales: {
                xAxes: [{
                  ticks: {
                    fontColor: 'rgb(255,255,255)',
                  },
                  scaleLabel: {
                    fontColor: 'rgb(255,255,255)',
                  },
                  gridLines: {
                    color: 'transparent'
                  },
                }],
                yAxes: [{
                  ticks: {
                    fontColor: 'rgb(255,255,255)',
                  },
                  gridLines: {
                    color: 'rgb(255,255,255)',
                  },
                }],
              },
            }} />
            </div>
          </div>

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

export default memo(CardDetails);
