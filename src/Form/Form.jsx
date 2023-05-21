import React from 'react';
import './Form.css'
import {useState} from "react";

const Form = () => {

    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('physical')

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>
                Введите ваши данные
            </h3>
            <input type='text' placeholder={'Страна'} value={country} onChange={onChangeCountry}/>
            <input type='text' placeholder={'Улица'} value={street} onChange={onChangeStreet}/>
            <select value={subject} onChange={onChangeSubject}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;