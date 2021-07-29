import React, { useRef } from 'react';
import styles from './header.module.css';

const Header = ({ onSearch }) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }
    const onClick = () => {
        handleSearch();
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <header>
            <h1 className={styles.logo}><a href="#a" title="Go to Home"><img src="./img/img-logo.png" alt="youtube" /><span>Youtube</span></a></h1>
            <div className={styles.searchBox}>
                <input ref={inputRef} type="search" placeholder="Keywords" onKeyPress={onKeyPress} />
                <button type="submit" onClick={onClick}>Search</button>
            </div>
        </header>
    )
};

export default Header;