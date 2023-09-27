import React from 'react';
import {
  SafeAreaView, Text, View, StyleSheet
} from 'react-native';
import PagerView from 'react-native-pager-view';
import LineUp from './public/LineUp';

function App(): JSX.Element {

  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key="1">
        <LineUp/>
      </View>
      <View key="2">
        {/* <ScoreBoard /> */}
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  pagerView: {
    flex: 1,
  },
});

export default App;