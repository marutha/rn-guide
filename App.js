import React, { useState } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';

import GoalItem from './Components/GoalItem'
import GoalInput from './Components/GoalInput'

export default function App() {
  const [courseGoals, setcourseGoals] = useState([]);

  const addGoalHandler = (enteredGoal) =>
    setcourseGoals(courseGoals => [
      ...courseGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  return (
    <ScrollView style={styles.screen}>
      <GoalInput
        addGoalHandler={addGoalHandler}
      />
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

});
