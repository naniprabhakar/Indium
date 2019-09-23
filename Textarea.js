import React from 'react';

class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ' '
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>React js Textarea</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Essay:</label>
                <textarea value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Textarea;