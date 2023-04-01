import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import OneSignal from 'react-native-onesignal';


const App = () => {
  useEffect(() => {
    //Remove this method to stop OneSignal Debugging 
    OneSignal.setAppId("deae0a91-c384-4361-88cd-a4700b3fc3f5");
    OneSignal.setLogLevel(6, 0);

    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
      console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
      let notification = notificationReceivedEvent.getNotification();
      console.log("notification: ", notification);
      const data = notification.additionalData
      console.log("additionalData: ", data);
      // Complete with null means don't show a notification.
      notificationReceivedEvent.complete(notification);
    });

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(data => {
      console.log("OneSignal: notification opened:", JSON.stringify(data));
    });

  }, [])
  return (
    <View style={styles.container}>
      <Text>App JS</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
