import React, { Component } from 'react';
import {
  View 
} from 'react-native'

import Task from './Task'
import PassTimeButton from './PassTimeButton'
import DaysRemaining from './DaysRemaining'
import DoneButton from './DoneButton'

export default class UserTaskComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completedTask: false,
            days: 3,
            user: 0
        }
    }

    decrementDay = () => {
        this.setState({
          days: this.state.days - 1
        })
    }

    render() {
        const { completedTask, days } = this.state

        return (
            <View>
                <Task task={'Clean'}/>
                <DaysRemaining days={days}/>
                <DoneButton completedTask={completedTask}/>
                <PassTimeButton decrementDay={this.decrementDay}/>
            </View>
        );
    }
}