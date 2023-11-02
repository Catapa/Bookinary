import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

import styles from './SearchBar.style';

/**
 * Component: SearchBar
 *
 * This component provides a search bar for users to enter search queries and initiate searches.
 *
 * Usage:
 * ```javascript
 * <SearchBar />
 * ```
 *
 * @component
 */
export const SearchBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const search = (query: string) => {
    router.push(
      `search?${new URLSearchParams({
        query,
      })}`,
    );
  };
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
          placeholder="Search books, subjects or authors"
          numberOfLines={1}
          style={styles.searchInput}
          onChangeText={(text) => setSearchQuery(() => text)}
          onSubmitEditing={() => search(searchQuery)}
        />
      </View>
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => search(searchQuery)}
      >
        <Feather
          name="search"
          size={24}
          color="white"
          style={styles.searchButtonIcon}
        />
      </TouchableOpacity>
    </View>
  );
};
