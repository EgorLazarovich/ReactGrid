import React from 'react';
import Body from './Body';

export default class Grid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { columns, data } = this.props;
        return (<div className="grid">
            <Body data={data} columns={columns} />
        </div>);
    }
}