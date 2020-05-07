import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search'
        placeholder={ placeholder }
        onChange={ handleChange } // , () => console.log(this.state) onChange is asynchronous and can only be displayed immediately with a callback (2nd parameter).
    />
);