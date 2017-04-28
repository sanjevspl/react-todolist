import React, { Component } from 'react';
import './slider.css';

class Slider extends Component {
    TryConvertToSlider(value) {
        if (typeof value === 'boolean') {
            return value;
        }
        if (typeof value === 'int' && value === 1) {
            return true;
        }
        if (typeof value === 'string') {
            switch (value.toLowerCase().trim()) {
                case "true": case "yes": case "1":
                    return true;
            }
        }
        return false;
    }
    render() {
        return (
            <label className="switch" >
                <input type="checkbox" checked={this.TryConvertToSlider(this.props.value)} onChange={() => this.props.onChange()} />
                <div className="slider round"></div>
            </label>
        );
    }
}

export default Slider;