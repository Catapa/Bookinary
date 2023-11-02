import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  card: {
    flex: 1 / 3,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    width: 150,
    //maxWidth: Dimensions.get('window').width / 3,
  },
  rounded: {
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: 'DMRegular',
  },
  author: {
    fontSize: 12,
    marginBottom: 4,
    fontFamily: 'DMRegular',
  },
  coverContainer: {
    marginHorizontal: 8,
    //borderWidth: 1,
    borderColor: '#888',
    alignItems: 'center',
    height: 170,
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
});
export default styles;
