import React,  { Component } from 'react'

class Utils extends Component {
     ToBoolean(value) {
        if (typeof value === 'boolean') {
            return value;
        }
        if (typeof value === 'string') {
            switch (value.toLowerCase().trim()) {
                case "true": case "yes": case "1": 
                return true;               
            }
            if (typeof value === 'int' && value === 1 ) {
                return true;
            }
        }
        return false;
    }
}

export default Utils;