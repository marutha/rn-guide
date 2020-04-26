import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  console.log("Hello Maru, I am here");
  const addGoal = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal('');
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal"
          style={styles.input}
          onChangeText={setEnteredGoal}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.cancelGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}



const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: '40%',
  }
});

export default GoalInput;