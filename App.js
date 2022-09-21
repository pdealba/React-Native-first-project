import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [showGoalInput, setShowGoalInput] = useState(false);

  function addGoalHandler(enteredTextGoal) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredTextGoal, key: Math.random().toString() },
    ]);
    setShowGoalInput(false);
  }

  function deleteItemHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((g) => g.key !== id);
    });
  }

  function toggleGoalInput() {
    setShowGoalInput(true);
  }

  function hideGoalInput() {
    setShowGoalInput(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add Goal" color="#a065ec" onPress={toggleGoalInput} />
        <GoalInput
          visible={showGoalInput}
          addGoalHandler={addGoalHandler}
          hideGoalInput={hideGoalInput}
        />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalContainer: {
    flex: 5,
  },
});
