import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredTextGoal) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredTextGoal, key: Math.random().toString() },
    ]);
  }

  function deleteItemHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((g) => g.key !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteItemHandler}
                id={itemData.item.key}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 5,
  },
});
