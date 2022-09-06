import React, { FunctionComponent } from 'react';
import {CountryType} from "../Types"


interface ICountryProps {
    country : CountryType
}

const Country : FunctionComponent<ICountryProps> = (props) => {
    const {country} = props
    return (
        <p>
        {country.name} - {country.capital}
        </p>
    );
}

export default Country;