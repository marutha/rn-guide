import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [currentGoals, setCurrentGoals] = useState([]);

  const addGoalHandler = () => setCurrentGoals(currentGoals => [...currentGoals, enteredGoal])
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal"
          style={styles.input}
          onChangeText={setEnteredGoal}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View>
        {currentGoals.map(goal =>
          (<View key={Math.random} style={styles.listItem}>
            <Text >{goal}</Text>
          </View>))
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
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
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }
});
