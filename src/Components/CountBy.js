import React from 'react';

class CountBy extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState({ number: this.state.number + this.props.step });
    }

    render() {
        return (
        <p
            onClick={ this.handleClick }>
            { this.state.number }
        </p>
        );
    }
}

export default CountBy;