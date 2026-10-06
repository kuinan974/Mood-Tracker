import { Pressable, StyleSheet, Text } from 'react-native';

type MoodButtonProps = {
  emoji: string;
  label: string;
  onPress: () => void;
};

export default function MoodButton({
  emoji,
  label,
  onPress,
}: MoodButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    marginVertical: 5,
    borderRadius: 12,
    alignItems: 'center',
  },

  emoji: {
    fontSize: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
});