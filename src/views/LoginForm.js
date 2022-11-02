import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import AuthProvider from '../provider/AuthProvider';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Entypo } from '@expo/vector-icons';

const LoginForm = (props) => {
  const { login, loginError } = useAuth()
 
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data) => {
    login(data, props)
  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  return (
    <KeyboardAvoidingView
      behavior = {Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          render={({field: { onChange, onBlur, value }}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="email"
          rules={{ required: true }}
        />
        
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          render={({field: { onChange, onBlur, value }}) => (
            <TextInput
            secureTextEntry={true}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="password"
          rules={{required: true}}
        />
          {loginError ?
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5}}>
              <Entypo name="circle-with-cross" size={24} color="red" />
              <Text style={{color:"red", paddingLeft: 10}}>
                Email and password does not match.
              </Text>
            </View> : null}

        <View style={styles.button}>
          <Button
            style={styles.buttonInner}
            color="white"
            title="Login"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: '500',
    color: 'black',
    fontSize: 16,
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#1565C0',
    borderRadius: 4,
  },
  container: {
    width:"100%",
    height:"100%",
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 20,
    backgroundColor: '#ecf0f3',
    marginTop:-60
  },
  input: {
    backgroundColor: "white",
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});

export default LoginForm