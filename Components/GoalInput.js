import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, } from 'react-native'

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your goal"
        style={styles.input}
        onChangeText={setEnteredGoal}
        value={enteredGoal}
      />
      <Button title="Add" onPress={props.addGoalHandler.bind(this, enteredGoal)} />
    </View>
  );
}



const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
  },
});

export default GoalInput;