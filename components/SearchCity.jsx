import { useState } from 'react';
import { Input } from 'antd';
import WeatherDisplay from './WeatherDisplay';

const SearchInput = () => {
    const [value, setValue] = useState();

    const handleSearch = (value) => {
        setValue(value)
    };

    return (
        <>
                <Input.Search
                    placeholder="Enter city name"
                    enterButton="Search"
                    size="large"
                    onSearch={handleSearch}
                />
        
                {value && <WeatherDisplay city={value} />}
        </>
    );
};
export default SearchInput;