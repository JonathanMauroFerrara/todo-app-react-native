import { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [modalIsVisibile, setModalIsVisible] = useState(false);
  const [goalsList, setGoalsList] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(!modalIsVisibile);
  }

  function onAddGoal(newGoal) {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      { text: newGoal, id: Math.random().toString() },
    ]);
    startAddGoalHandler();
  }

  function onDeleteGoal(id) {
    setGoalsList((prev) => goalsList.filter((item) => item.id !== id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.addButton}>
        <Button
          title="Add new goal"
          color="#ffffff"
          onPress={startAddGoalHandler}
        />
      </View>
      {modalIsVisibile && (
        <GoalInput
          placeholder="Add goals.."
          addGoalHandler={onAddGoal}
          onCancel={startAddGoalHandler}
          btnText="Add Goal"
          isModalVisible={modalIsVisibile}
        />
      )}
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>
          {goalsList.length !== 1
            ? `${goalsList.length} Goals Added:`
            : '1 Goal'}
        </Text>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return (
              <GoalItem
                onDeleteHandler={onDeleteGoal}
                text={itemData.item.text}
                id={itemData.item.id}
              />
            );
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, i) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  listContainer: {
    flex: 5,
    marginTop: 15,
  },
  listTitle: {
    marginTop: 20,
    marginBottom: 10,
  },
  addButton: {
    borderRadius: 10,
    backgroundColor: '#000',
  },
});
