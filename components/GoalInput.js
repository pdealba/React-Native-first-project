import {
  View,
  Button,
  TextInput,
  Modal,
  Image,
  StyleSheet,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredTextGoal, setEnteredTextGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredTextGoal(enteredText);
  }

  function addGoalHandler() {
    props.addGoalHandler(enteredTextGoal);
    setEnteredTextGoal("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Write your goal..."
          onChangeText={goalInputHandler}
          value={enteredTextGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#f31282"
              onPress={props.hideGoalInput}
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" color="#5e0acc" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    marginHorizontal: 8,
    width: 100,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
