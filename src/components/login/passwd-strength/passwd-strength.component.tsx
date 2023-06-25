import { useState } from 'react'
import './passwd-strength.css'
import RequiredText from './required-text/required-text.component';
import StrengthBar from './strength-bar/strength-bar.component';

const PasswdStrength = () => {
    return <div className="passwd-strength">
        <RequiredText className='requirement' text="hey">8 حروف</RequiredText>
        <RequiredText className='requirement' text="hey">حروف كبيرة وصغيرة</RequiredText>
        <p className='requirement'>حروف مميزة</p>
        <StrengthBar></StrengthBar>
    </div>
}

export default PasswdStrength;
