import Toast, { BaseToast, ToastConfig } from 'react-native-toast-message';
import { View } from 'react-native';
import { Text } from 'tamagui';
import React from 'react';

export const SuccessRegisterToastView = (props: any) => (
  <View
    style={{
      backgroundColor: '#34c759',
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 8,
      marginHorizontal: 10,
    }}
  >
    <Text fontFamily={'RedHatDisplay_500Medium'} style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>
      {props.text1}
    </Text>
    {props.text2 && (
      <Text style={{ color: 'white', marginTop: 2 }}>{props.text2}</Text>
    )}
  </View>
);