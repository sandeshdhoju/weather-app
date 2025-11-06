import { useState, useEffect } from 'react';
import { Alert, Card, Image, Typography, Spin } from 'antd';
import { dressUpSuggestion, formatTemperature, getExtraSuggestion, sendToPipedream } from "../lib/utils"
import { API_KEY } from '../lib/constants';

const WeatherDisplay = ({ city }) => {

    const [weatherData, setWeatherData] = useState(null); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

                if (!res.ok) {
                    throw new Error(`Failed to fetch weather data. Plase try again with different city name.`);
                }
                const data = await res.json();
                const formatedData = {
                    name: data.name,
                    country: data.sys?.country,
                    temp: data.main.temp,
                    temp_max: data.main.temp_max,
                    temp_min: data.main.temp_min,
                    conditions: data.weather[0].main,
                    description: data.weather[0].description,
                    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                }
                setWeatherData(formatedData);
                sendToPipedream({
                        name: "Sandesh Dhoju",
                        city: formatedData?.name,
                        temperature: formatedData?.temp,
                        dressUpSuggestion: dressUpSuggestion(formatedData?.temp)
                    })
                
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (city) {
            fetchWeather();
        }
    }, [city]);

    if (error) return <Alert message="Error" type='error' description={error} />;
    if (!weatherData) return (loading ? <Spin /> : "Please select a city.");

    return (
        <div className='m-8'>
            <Card title={`${weatherData?.name}, ${weatherData?.country}`} loading={loading}>
                <div className='flex justify-center'>
                    <Image
                        src={weatherData?.icon}
                        alt={weatherData?.description}
                        width={150}
                        height={150}
                        preview={false}
                    />
                </div>
                <Typography.Title className='flex justify-center'>{formatTemperature(weatherData?.temp)}</Typography.Title>
                <Typography.Title
                    level={5}
                    className='flex justify-center'>
                    H: {formatTemperature(weatherData?.temp_max)}  L: {formatTemperature(weatherData?.temp_min)}
                </Typography.Title>
                <p className='flex justify-center'>{weatherData?.conditions}</p>
                <p className='flex justify-center'>{dressUpSuggestion(weatherData?.temp)}</p>
                <p className='flex justify-center'>{getExtraSuggestion(weatherData?.conditions)}</p>
            </Card>
        </div>
    );
}

export default WeatherDisplay;
