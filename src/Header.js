import React, { useState } from 'react';


const Header = (props) => {
    const { search, onInputChange, onSearchClick } = props;
    
   
    return (
        <div className="jumbotron">
            <h1 className="display-1">
                <i className="material-icons brand-icon">
                    fastfood</i>Food Recipe</h1>
            <div className="input-group w-50 mx-auto">
                <input type="text" className="form-control" placeholder="Search Recipes" value={search} onChange={onInputChange} />
                <div className="input-group-append">
                    <button className="btn btn-dark" onClick={onSearchClick}>Search</button>
                </div>
            </div>
        </div>
    );
};
export default Header;