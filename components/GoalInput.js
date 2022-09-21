import { View, Button, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredTextGoal, setEnteredTextGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredTextGoal(enteredText);
  }

  function addGoalHandler() {
    props.addGoalHandler(enteredTextGoal)
    setEnteredTextGoal('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Write your goal..."
        onChangeText={goalInputHandler}
        value={enteredTextGoal}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
