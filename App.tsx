import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';

const App: React.FC = () => {
  const webViewRef = useRef<WebView>(null);

  useEffect(() => {
    const handleBackPress = () => {
      if (webViewRef.current) {
        if (webViewRef.current.goBack) {
          webViewRef.current.goBack();
          return true;
        }
      }
      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{uri: 'https://hungalo.com'}}
        style={styles.webView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  webView: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default App;
