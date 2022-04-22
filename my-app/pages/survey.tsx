import React from 'react';
import Select from 'react-select';
import CheckBox from '../components/CheckBox';
import RadioButton from '../components/RadioButton';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import consts from '../consts/consts';
import styles from '../styles/styles.module.css';
import Router from 'next/router';

const LandingPage = () => {
    function handleSubmit(e: any) {
        e.preventDefault();
        Router.push('/ ')
    }
    return (
        <div onSubmit={handleSubmit}>
            <h1 className={styles.title}>Survey Form</h1>
            <p className={styles.description}>You can take a survey, so we can know</p>
            <form className={styles.survey_form}>
                <label className={styles.header_label}> Name </label>
                <TextInput type="text" classStyle={styles.text_input} placeholder=" Your name"/>
                <label className={styles.header_label}> Email </label>
                <TextInput type="email" classStyle={styles.text_input} placeholder=" Your email"/>
                <label className={styles.header_label}> Age </label>
                <TextInput type="number" classStyle={styles.text_input} placeholder=" Your age"/>
                <p className={styles.text}>How would you estimate our services?</p>
                <Select 
                options={consts.optionsSelect} 
                defaultValue={consts.defaultValue}
                className={styles.dropdown}
                />
                <p className={styles.text}>Would you choose our services again?</p>
                <RadioButton options={consts.optionsRadio} classStyle={styles.input_radio} />
                <p className={styles.text}>What we should improve? (Check all that apply)</p>
                <CheckBox options={consts.optionsCheckBox} classStyle={styles.input_checkbox}/>
                <textarea
                placeholder='Enter your comment here...'
                className={styles.input_textarea}
                />
                <Button 
                    text="Submit" 
                    type="submit" 
                    classStyle={styles.submit}
                />
            </form>
        </div>
    );
};

export default LandingPage;