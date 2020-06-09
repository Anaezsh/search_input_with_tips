import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Provider} from 'react-redux';

import InputWithTipList from './src/components/InputWithTipList';

import {store} from './src/store';

import {COLORS} from './src/constants';

export default function App() {
  return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <View style={styles.main}>
            <InputWithTipList/>
            {/*<Text>*/}
            {/*  jgsldjgeritpweoiskfginw oweiuyijuyweinvyu hrwopyuwpneungpnuvpwu hgwepuywpuengoiaeuroyuweo ngoweuoruwohego*/}
            {/*</Text>*/}
            {/*<Text>*/}
            {/*  jgsldjgeritpweoiskfginw oweiuyijuyweinvyu hrwopyuwpneungpnuvpwu hgwepuywpuengoiaeuroyuweo ngoweuoruwohego*/}
            {/*</Text>*/}
          </View>
        </SafeAreaView>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    backgroundColor: COLORS.White,
    paddingTop: 100,
    paddingHorizontal: 10,
  }
});
