import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import styles from './catalog.style';
import { Trending } from '../../components';
import { Subjects } from '../../components/Subjects';
import { COLORS } from '../../styles';

/**
 * Component: Header
 *
 * This component displays a header with a customizable text.
 *
 * @param text - The text to display in the header.
 *
 * Usage:
 * ```typescript
 * <Header text="My Header Text" />
 * ```
 *
 * @component
 */
const Header = ({ text = '' }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

/**
 * Component: ListPage
 *
 * This component displays a list of books based on the selected 'key' and 'query' search parameters.
 *
 * Usage:
 * ```javascript
 * <ListPage />
 * ```
 *
 * @component
 */
const ListPage = () => {
  const { key, query } = useLocalSearchParams();
  let List;
  if (key === 'trending')
    List = <Trending headerComponent={<Header text="Trending books" />} />;
  else if (key === 'subjects') {
    List = (
      <Subjects
        subject_query={query as string}
        headerComponent={
          <Header
            text={`${
              query === 'accessible_book' ? 'Classic' : (query as string)
            } books`}
          />
        }
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightGray },
          headerShadowVisible: false,
          /* headerLeft: () => (
            <TouchableOpacity>
              <Feather name="menu" size={36} color={COLORS.white} />
            </TouchableOpacity>
          ), */
          headerRight: () => (
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'baseline', gap: 4 }}
            >
              <Text
                style={{
                  color: COLORS.black,
                  fontSize: 16,
                  fontWeight: '200',
                }}
              >
                My Library
              </Text>
              <Ionicons name="library" size={36} color={COLORS.black} />
            </TouchableOpacity>
          ),
          headerTitle: '',
        }}
      />
      {List}
    </SafeAreaView>
  );
};
export default ListPage;
