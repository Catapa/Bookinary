import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FAFAFC',
    padding: 16,
  },
  bookImage: {
    width: '100%',
    height: 275,
  },
  bookImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookTitle: {
    marginBottom: 4,
    fontSize: 24,
    marginTop: 24,
    textAlign: 'center',
    color: 'rgb(50, 50, 50)',
    fontWeight: '600',
  },
  bookSubtitle: {
    marginBottom: 8,
    fontSize: 16,
    textAlign: 'center',
    color: 'rgb(170, 170, 170)',
  },
  authorContainer: {
    marginBottom: 20,
  },
  authorText: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  bookDescription: {
    fontSize: 14,
    color: 'rgb(50, 50, 50)',
    fontWeight: '300',
    marginBottom: 16,
  },
  subjectTag: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgb(50, 50, 50)',
    textDecorationLine: 'underline',
    textDecorationColor: 'rgb(220, 220, 200)',
  },
  subjectHeader: {
    fontSize: 12,
    color: 'rgb(128, 128, 128)',
    fontWeight: '300',
  },
  subjectContainer: {
    marginBottom: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 8,
    rowGap: 2,
    alignItems: 'baseline',
  },
  saveButton: {
    width: '66%',
    marginBottom: 20,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'rgb(97, 130, 100)',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 100,
    backgroundColor: 'rgb(121, 172, 120)',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: 'rgb(255, 255, 255)',
  },
});
export default styles;
