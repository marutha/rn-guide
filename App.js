import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './Components/GoalItem'
import GoalInput from './Components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(courseGoals => [
      ...courseGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
    toggleModal();
  }

  const removeGoalHandler = (id) =>
    setCourseGoals(courseGoals => courseGoals.filter(goal => goal.id != id));

  const toggleModal = () => setIsAddMode(mode => !mode);

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={toggleModal} />
      <GoalInput
        visible={isAddMode}
        addGoalHandler={addGoalHandler}
        cancelGoal={toggleModal}
      />
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem onDelete={removeGoalHandler} item={itemData.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

});
