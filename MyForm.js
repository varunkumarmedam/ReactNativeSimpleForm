import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';

const MyForm = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    setIsLoading(true);

    // Make any async or API call here..
    setTimeout(() => {
      // Once the API is call done, execute below statements
      setIsLoading(false);
      navigation.navigate('MyTable', {email: email});
    }, 2000);
  };
  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={newText => setEmail(newText)}
          defaultValue={email}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={newText => setPassword(newText)}
          defaultValue={password}
        />
      </View>
      <Button
        title="Got to Table page"
        disabled={isLoading}
        onPress={() => onSubmit()}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderWidth: 1,
  },
});

export default MyForm;
