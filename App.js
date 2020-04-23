import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './Components/GoalItem'
import GoalInput from './Components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  
  const addGoalHandler = (enteredGoal) =>
    setCourseGoals(courseGoals => [
      ...courseGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);

  const removeGoalHandler = (id) => 
    setCourseGoals(courseGoals => courseGoals.filter(goal => goal.id != id));
  
  return (
    <View style={styles.screen}>
      <GoalInput
        addGoalHandler={addGoalHandler}
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
