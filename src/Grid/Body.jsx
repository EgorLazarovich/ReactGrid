import React from 'react';
import Row from './Row';
import RowCell from './RowCell';
import Header from './Header';

export default class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    getCells(data) {
        const { columns } = this.props;
        return columns.map(({ name }) => {
            const value = data[name];
            return <RowCell value={value}/>
        });
    }

    render() {
        const { data } = this.props;
        const items = data.map((rowProps, rowInd) => {
            const cells = this.getCells(rowProps);
            return <Row {...rowProps} key={`row-${rowInd}`}>{cells}</Row>
        });
        return <div className="body">
            <Header columns={ this.props.columns } />
            {items}
        </div>;
    }
}