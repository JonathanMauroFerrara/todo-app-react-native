import React, { useState } from 'react';
import { TextInput, View, Button, Modal, Image } from 'react-native';
import { StyleSheet } from 'react-native';

function GoalInput({
  placeholder,
  addGoalHandler,
  btnText,
  isModalVisible,
  onCancel,
}) {
  const [newGoal, setNewGoal] = useState(null);

  function inputGoalHandler(enteredText) {
    setNewGoal(enteredText);
  }

  function onAddGoal() {
    addGoalHandler(newGoal);
    setNewGoal('');
  }

  return (
    <Modal visible={isModalVisible} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.goalImage}
          source={require('../assets/image/WhiteTarget.png')}
        />
        <TextInput
          value={newGoal}
          style={styles.inputGoal}
          placeholder={placeholder}
          onChangeText={inputGoalHandler}
          placeholderTextColor="#cccccc"
          autoFocus
        />
        <View style={styles.buttonContainer}>
          <View style={styles.addButton}>
            <Button color="#fff" title={btnText} onPress={onAddGoal} />
          </View>
          <View style={styles.cancelButton}>
            <Button color="#fff" title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#00000c',
  },
  inputGoal: {
    width: '100%',
    padding: 5,
    color: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    borderRadius: 10,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  addButton: {
    width: '30%',
    margin: 8,
    borderWidth: 1,
    backgroundColor: '#51bc09',
    borderRadius: 10,
  },
  cancelButton: {
    width: '30%',
    margin: 8,
    borderWidth: 1,
    backgroundColor: '#E80000',
    borderRadius: 10,
  },
  goalImage: {
    resizeMode: 'contain',
    height: 50,
    width: 50,
  },
});

export default GoalInput;
