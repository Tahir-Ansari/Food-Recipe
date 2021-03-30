import React from 'react';

const RecipeItem = (props) => {
    const {name, image, ingredientLines} = props;
    return (
            <div className="card py-5 text-center">
                <img
                    src={image}
                    className="img-fluid w-30 mx-auto rounded-circle" />
                <div className="card-body">
                    <h5> {name} </h5>
                </div>
                <ul className="list-group list-group-flush">
                    {ingredientLines.map(ingredient => (
                        <li className="list-group-item"> {ingredient} </li>
                    ))}
                </ul>
            </div>
    );
};
export default RecipeItem;