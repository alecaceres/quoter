import React from "react";
import styled from "@emotion/styled";
import { capitalize } from "../helper";
import PropTypes from "prop-types";

const SummaryContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`

const Summary = ({data}) => {
    const {brand, year, plan} = data;
    return (
        <SummaryContainer>
            <h2>Summary</h2>
            <ul>
                <li>Brand: {capitalize(brand)} </li>
                <li>Plan: {capitalize(plan)} </li>
                <li>Year: {year} </li>
            </ul>
        </SummaryContainer>
    )
};

export default Summary;

Summary.propTypes = {
    data: PropTypes.object.isRequired
}