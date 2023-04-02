import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

// route holds props from parent
const MyTable = ({route}) => {
  const [tableHeaders, setTableHeaders] = useState([
    'Head',
    'Head2',
    'Head3',
    'Head4',
  ]);
  const [tableRows, setTableRows] = useState([
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
    ['1', '2', '3', '456\n789'],
    ['a', 'b', 'c', 'd'],
  ]);

  return (
    <View>
      <Text>My table</Text>
      {/* <Text>{route?.params?.email}</Text> */}
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data={tableHeaders} style={styles.head} textStyle={styles.text} />
        <Rows data={tableRows} textStyle={styles.text} />
      </Table>
      <Button
        title="Update Table Data"
        onPress={() => {
          // Make another API call and update table if required
          setTableRows([
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '456\n789'],
          ]);
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderWidth: 1,
  },
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
});

export default MyTable;
