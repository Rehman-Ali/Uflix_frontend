import React from 'react';
import { Spinner } from 'react-mdl';
import icon from '../assests/icon.png';
export const Loading = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img src={icon} height={100} alt='loading' />
            <h4 style={{ color: '#fff', margin: 5 }}>{props.title}</h4>
            <Spinner singleColor style={{ alignSelf: 'center', margin: 5 }} />
        </div>
    )
}