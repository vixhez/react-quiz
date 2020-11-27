import React from 'react';

class HideMe extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState({ clicked: true });
    }

    render() {
        const { children } = this.props;

        return (
        <p
            onClick={ this.handleClick }>
            { this.state.clicked === true ? "" : children }
        </p>
        );
    }
}

export default HideMe;