import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({video: { snippet }}) => (
    <li className={styles.videoItem}>
        <a href="#a">
            <p className={styles.imgBox}>
                <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
            </p>
            <p className={styles.txtBox}>
                <span className={styles.title}>{snippet.title}</span>
                <span className={styles.channelTitle}>{snippet.channelTitle}</span>
            </p>
        </a>
    </li>            
);

export default VideoItem;