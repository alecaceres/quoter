import React, { Fragment } from "react";

const Summary = ({data}) => {
    const {brand, year, plan} = data;
    return (
        <Fragment>
            <h2>Summary</h2>
            <ul>
                <li>Brand: </li>
                <li>Plan: </li>
                <li>Year: </li>
            </ul>
        </Fragment>
    )
};

export default Summary;