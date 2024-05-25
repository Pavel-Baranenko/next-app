"use client"
import React from 'react'
// import ReactPlayer from 'react-player'
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css';

import styles from "./index.module.scss"
import "./video.css"

function Video() {


  return (
    <>
      <section className={styles.video}>
        <div className="container__fluid">
          <div className={styles.player}>
            {/* <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /> */}
            <Player
              // autoPlay
              poster="./img/video-preview.jpg"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
              <ControlBar autoHide={true} className="play" />
            </Player>
          </div>
          <div className={styles.bottom}>
            <div className={styles.column}>
              <h6 className={styles.title}>8 лет</h6>
              <p className={styles.text}>Занимаемся рекламой в сфере недвижимости</p>
            </div>
            <div className={styles.column}>
              <h6 className={styles.title}>43 521</h6>
              <p className={styles.text}>Клиентов уже нашли своего риелтора</p>
            </div>
            <div className={styles.column}>
              <h6 className={styles.title}>250 +</h6>
              <p className={styles.text}>Новых заявок на платформе каждый день</p>
            </div>
            <div className={styles.column}>
              <h6 className={styles.title}>1 309</h6>
              <p className={styles.text}>Риелторов из разных городов России</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Video;