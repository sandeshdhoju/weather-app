import { useState } from 'react';
import { Select } from 'antd';
import WeatherDisplay from './WeatherDisplay';

const SelectCity = () => {

    const [value, setValue] = useState("");

    const handleChange = newValue => {
        setValue(newValue);
    };

    const options = [
        {
            label: "London",
            value: "london"
        },
        {
            label: "Error Test",
            value: "kkk"
        },
        {
            label: "Brisbane",
            value: "brisbane"
        }
    ]

    return (
        <>
            <Select
                value={value}
                style={{ width: "100%" }}
                placeholder="Select city"
                onChange={handleChange}
                options={options}
            />
            <WeatherDisplay city={value} />
        </>
    )
}

export default SelectCity;