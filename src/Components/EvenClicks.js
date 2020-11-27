import React from 'react';
import { Button } from 'react-bootstrap';

class EvenClicks extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            clicks: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState({ clicks: this.state.clicks + 1 });
    }

    render() {
        return (
            <Button
            variant="outline-info"
            onClick={ this.handleClick }>
            { this.state.clicks % 2 === 0 ? "Even" : "Odd" }
            </Button>
        );
    }
}

export default EvenClicks;