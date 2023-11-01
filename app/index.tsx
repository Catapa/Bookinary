import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useTrendingBooks } from '../api/hooks';
import { HorizontalList, SearchBar } from '../components/views';

export default function App() {
  const { data, isLoading, error } = useTrendingBooks('daily', {
    limit: 20,
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.hero}>
          <Text style={styles.heading}>Bookinary</Text>
          <Text style={styles.subheading}>What will you read next?</Text>
        </View>

        {/* Search */}
        <SearchBar />

        {/* Trending */}
        <HorizontalList
          data={data?.works}
          isLoading={isLoading}
          error={error}
          heading="Trending"
          redirect="/list/trending"
        />
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  hero: {
    backgroundColor: '#454ade',
    paddingVertical: 36,
    paddingHorizontal: 4,
    borderBottomEndRadius: 150,
    marginBottom: 16,
  },
  heading: {
    fontSize: 36,
    fontWeight: '300',
    textAlign: 'center',
    color: '#ffffff',
  },
  subheading: {
    fontSize: 24,
    fontWeight: '200',
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#ffffff',
  },
});
