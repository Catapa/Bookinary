import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { useTrendingBooks } from '../api/hooks';
import { HorizontalList } from '../components/views';

export default function App() {
  const { data, isLoading, error } = useTrendingBooks('daily', {
    limit: 20,
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <Text>Bookinary</Text>
        <Text>What will you read next?</Text>
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
    backgroundColor: '#FAFAFC',
    //alignItems: 'center',
    //justifyContent: 'flex-start',
  },
});
