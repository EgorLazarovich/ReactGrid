import React from 'react';
import HeaderCell from './HeaderCell';

export default function({ columns }) {
    const items = columns.map((columnProps, index) => <HeaderCell {...columnProps} key={`header-cell-${index}`}/>);
    return (<div className="header">{items}</div>);
}