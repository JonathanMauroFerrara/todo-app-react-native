import { StyleSheet } from 'react-native';
import { View, Text, Pressable } from 'react-native';

function GoalItem({ onDeleteHandler, text, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteHandler.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: '#404040',
  },
  pressedItem: {
    opacity: 0.8,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  goalText: {
    padding: 5,
    color: '#fff',
  },
});

export default GoalItem;
