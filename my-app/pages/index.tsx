import React, { useEffect, useRef, useState } from 'react';
import LogOutButton from '../components/LogOutButton';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import styles from '../styles/styles.module.css';
import apiRequest from '../api/api';
import Link from 'next/link';

const HomePage = () => {
    const [city, setCity] = useState('');
    const [cityFound, setCityFound] = useState(false);
    const [noErrors, setNoErrors] = useState(false);
    const [apiNoBadRequest, setApiNoBadRequest] = useState(false)
    const [weatherInfo, setWeatherInfo] = useState(0);


        async function apiHandler() { 
            try{
                console.log(1)
                const weather = await apiRequest(city);
                setWeatherInfo(parseFloat((weather - 273.15).toFixed(2)));
                setApiNoBadRequest(true);
            } catch(e){
                setNoErrors(true);
            }
        }
    

    return (
        <div>
            <Link 
            href={"/survey"} 
            > 
            <a className={styles.toSurvey}>Take a survey</a>
            </Link>
            <form className={styles.weather}>
                {(cityFound === true && apiNoBadRequest === true) || noErrors === true ?
                    noErrors == false ?
                        <p>Average temperature today in {city} is: {weatherInfo}°C</p>
                        :
                        <p>City not found!</p>
                :
                [
                    <TextInput key={0}
                    type='text' 
                    placeholder='Write your city to check weather' 
                    classStyle={styles.cityFind} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setCity(e.target.value)}} 
                    />,
                    <Button key={1}
                    type="button" 
                    text='Check' 
                    classStyle={styles.cityFindButton}
                    onClick={() => {
                        setCityFound(true);
                        apiHandler();
                    }}
                    />
                ]
                }
            </form>
            <LogOutButton />
        </div>
    );
};

export default HomePage;