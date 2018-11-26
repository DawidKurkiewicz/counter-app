import React from 'react'
import Button from './Button'


class Counter extends React.Component {
    state = (JSON.parse(localStorage.getItem('Counter-state')) ||
        {
            number: this.props.startNumber || 0
        }
    )
    componentDidUpdate() {
        this.saveInLocalStorage()
    }

    saveInLocalStorage = () => localStorage.setItem(
        'Counter-state',
        JSON.stringify(this.state)
    )

    plusOneHandler = () => {
        this.setState({ number: this.state.number + 1 })
    }
    minusOneHandler = () => {
        this.setState({ number: this.state.number - 1 })
    }
    plusFiveHandler = () => {
        this.setState({ number: this.state.number + 5 })
    }
    minusFiveHandler = () => {
        this.setState({ number: this.state.number - 5 })
    }
    zeroHandler = () => {
        this.setState({ number: 0 })
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <Button
                    onClick={this.plusOneHandler}
                    label={'+1'}
                />
                <Button
                    onClick={this.minusOneHandler}
                    label={'-1'}
                />
                <Button
                    onClick={this.plusFiveHandler}
                    label={'+5'}
                />
                <Button
                    onClick={this.minusFiveHandler}
                    label={'-5'}
                />
                <Button
                    onClick={this.zeroHandler}
                    label={'zero'}
                />
            </div>

        )
    }
}

export default Counter
