import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import FlashMessage from "react-native-flash-message";
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import { Loading } from './components';
import { LogBox } from 'react-native';

const MainApp = () => {
  const stateGlobal = useSelector(state => state);
  LogBox.ignoreLogs(["FIREBASE WARNING", "Async Storage has been extracted from react-native core", "Remote debugger is in a background tab which may cause apps to perform slowly."])
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {stateGlobal.loading && <Loading />}
    </>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App
