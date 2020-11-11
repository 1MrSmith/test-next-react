import React, { Fragment, memo, } from 'react';
import Link from 'next/link';
import { useAppContext } from '../AppContext';
import asyncLocalStorage from '../../services/local-storage.service';
import addToBookmark from '../../utils/add-to-bookmark';
import config from '../../config';
import style from './style.module.scss';

const Card = (props) => {
  const { userSearchString } = useAppContext();

  const cleanUp = () => {
    userSearchString('');
  }

  const onChange = async (event) => {

    const id = event.target.name;
    const userStorage = await asyncLocalStorage.getItem(config.keyLocalStorage);
    const user = JSON.parse(userStorage);

    const updatedUser = addToBookmark(user, props.typeVideo, id);

    await asyncLocalStorage.setItem(config.keyLocalStorage, JSON.stringify(updatedUser));

  }

  return (
    <Fragment>
      <Link
      className={style['section-card']}
      onClick={cleanUp}
      href={`${props.detailsUrl}/${props.id}`}>

        <div
        className={style['section-card__wrapper']}>

          <img
          className={style['section-card__img']}
          src={props.imageLink ? props.imageLink : ''}
          alt={props.title} />

        </div>

      </Link>
      <span
      className={style['bookmark']}>

        <input
        type='checkbox'
        className={style['bookmark-input']}
        name={props.id}
        id={props.id}
        defaultChecked={props.checked}
        onClick={onChange} />

        <label
        htmlFor={props.id}
        className={style['bookmark-star']}></label>

      </span>
    </Fragment>
  );
}

export default memo(Card);
