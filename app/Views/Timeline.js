import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TimeLine from 'react-native-timeline-flatlist';

export class HistoryTimeLine extends React.Component {
    constructor(){
        super()
        this.data = [
          {time: '2010', title: 'Event 1', description: 'Event 1 Description'},
          {time: '2000', title: 'Event 2', description: 'Event 2 Description'},
          {time: '1999', title: 'Event 3', description: 'Event 3 Description'},
          {time: '1994', title: 'Event 4', description: 'Event 4 Description'},
          {time: '1993', title: 'Event 5', description: 'Event 5 Description'}
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <TimeLine 
                    style={styles.list}
                    data = {this.data}
                    timeContainerStyle={{minWidth:50, marginTop: -5}}
                    circleSize={20}
                    timeStyle={{textAlign: 'center', padding:5, borderRadius:20, backgroundColor:'#ff9797', overflow: 'hidden'}} 
                    
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D4CAA3',
        padding: 20,
        paddingTop: 60
    },
    list: {
        flex: 1,
        //marginTop: 20
        //alignItems: 'center',
        //justifyContent: 'center'
    }

});