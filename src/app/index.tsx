import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MoodButton from '../components/mood/moodbutton';

type Mood = 'happy' | 'sad' | 'tired' | 'excited';

type MoodCounts = {
  happy: number;
  sad: number;
  tired: number;
  excited: number;
};

export default function HomeScreen() {
  const [moodCounts, setMoodCounts] = useState<MoodCounts>({
    happy: 0,
    sad: 0,
    tired: 0,
    excited: 0,
  });

  const selectMood = (mood: Mood) => {
    setMoodCounts((currentCounts) => ({
      ...currentCounts,
      [mood]: currentCounts[mood] + 1,
    }));
  };

  const resetMoods = () => {
    setMoodCounts({
      happy: 0,
      sad: 0,
      tired: 0,
      excited: 0,
    });
  };

  const highestCount = Math.max(...Object.values(moodCounts));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
        
          <Text style={styles.title}>My Mood Tracker</Text>

          <Text style={styles.subtitle}>
            How are you feeling today?
          </Text>
        </View>

        {/* Mood Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Choose your mood</Text>

          <View style={styles.moodGrid}>
            <MoodButton
              emoji="😊"
              label="Happy"
              color="#FFE4A3"
              onPress={() => selectMood('happy')}
            />

            <MoodButton
              emoji="😢"
              label="Sad"
              color="#BDE0FE"
              onPress={() => selectMood('sad')}
            />

            <MoodButton
              emoji="😴"
              label="Tired"
              color="#DCC8FF"
              onPress={() => selectMood('tired')}
            />

            <MoodButton
              emoji="🤩"
              label="Excited"
              color="#FFB7C5"
              onPress={() => selectMood('excited')}
            />
          </View>
        </View>

        {/* Counts */}
        <View style={styles.countsCard}>
          <View style={styles.countHeader}>
            <View>
              <Text style={styles.countsTitle}>Your Mood Summary</Text>
              <Text style={styles.countsSubtitle}>
                Your mood selections
              </Text>
            </View>

            <Text style={styles.chartEmoji}>📊</Text>
          </View>

          {/* Happy */}
          <View
            style={[
              styles.countRow,
              moodCounts.happy === highestCount &&
                highestCount > 0 &&
                styles.mostSelected,
            ]}
          >
            <View style={[styles.smallIcon, { backgroundColor: '#FFE4A3' }]}>
              <Text>😊</Text>
            </View>

            <Text style={styles.countLabel}>Happy</Text>

            <View style={styles.numberCircle}>
              <Text style={styles.countNumber}>
                {moodCounts.happy}
              </Text>
            </View>
          </View>

          {/* Sad */}
          <View
            style={[
              styles.countRow,
              moodCounts.sad === highestCount &&
                highestCount > 0 &&
                styles.mostSelected,
            ]}
          >
            <View style={[styles.smallIcon, { backgroundColor: '#BDE0FE' }]}>
              <Text>😢</Text>
            </View>

            <Text style={styles.countLabel}>Sad</Text>

            <View style={styles.numberCircle}>
              <Text style={styles.countNumber}>
                {moodCounts.sad}
              </Text>
            </View>
          </View>

          {/* Tired */}
          <View
            style={[
              styles.countRow,
              moodCounts.tired === highestCount &&
                highestCount > 0 &&
                styles.mostSelected,
            ]}
          >
            <View style={[styles.smallIcon, { backgroundColor: '#DCC8FF' }]}>
              <Text>😴</Text>
            </View>

            <Text style={styles.countLabel}>Tired</Text>

            <View style={styles.numberCircle}>
              <Text style={styles.countNumber}>
                {moodCounts.tired}
              </Text>
            </View>
          </View>

          {/* Excited */}
          <View
            style={[
              styles.countRow,
              moodCounts.excited === highestCount &&
                highestCount > 0 &&
                styles.mostSelected,
            ]}
          >
            <View style={[styles.smallIcon, { backgroundColor: '#FFB7C5' }]}>
              <Text>🤩</Text>
            </View>

            <Text style={styles.countLabel}>Excited</Text>

            <View style={styles.numberCircle}>
              <Text style={styles.countNumber}>
                {moodCounts.excited}
              </Text>
            </View>
          </View>
        </View>

        {/* Reset Button */}
        <Pressable
          style={({ pressed }) => [
            styles.resetButton,
            pressed && styles.resetPressed,
          ]}
          onPress={resetMoods}
        >
          <Text style={styles.resetEmoji}>↻</Text>
          <Text style={styles.resetText}>Reset Moods</Text>
        </Pressable>

        <Text style={styles.footer}>
          Take a moment to check in with yourself 💜
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F3FF',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },

  iconCircle: {
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: '#E8D9FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  headerEmoji: {
    fontSize: 38,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#3D315B',
    marginBottom: 7,
  },

  subtitle: {
    fontSize: 16,
    color: '#7B718D',
  },

  section: {
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#3D315B',
    marginBottom: 15,
  },

  moodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  countsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 18,
    marginTop: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  countHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  countsTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#3D315B',
  },

  countsSubtitle: {
    fontSize: 13,
    color: '#91879E',
    marginTop: 3,
  },

  chartEmoji: {
    fontSize: 30,
  },

  countRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F6FC',
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'transparent',
  },

  mostSelected: {
    borderColor: '#9B6DFF',
    backgroundColor: '#F1EAFF',
  },

  smallIcon: {
    width: 45,
    height: 45,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },

  countLabel: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#494052',
  },

  numberCircle: {
    minWidth: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#6C4AB6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  countNumber: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6C4AB6',
    paddingVertical: 16,
    borderRadius: 17,
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },

  resetPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },

  resetEmoji: {
    color: '#FFFFFF',
    fontSize: 22,
    marginRight: 8,
  },

  resetText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },

  footer: {
    textAlign: 'center',
    color: '#8B8098',
    fontSize: 13,
    marginTop: 20,
  },
});