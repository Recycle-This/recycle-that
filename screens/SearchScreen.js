import React, { useState } from 'react';
import {
  Container,
  Header,
  Item,
  Icon,
  Button,
  Text,
  Content,
  List,
  ListItem,
  Left,
  Right
} from 'native-base';
import { TextInput, Alert } from 'react-native';


const SearchScreen = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleItemPress = item => {
    navigation.navigate('Details', {
      item,
    });
  }

  const handleSearchPress = () => {
    if (searchInput !== '') {
      // handle search
    } else {
      Alert.alert('Invalid Input', 'Please enter a valid search')
    }
  }

  const top = [
    'CFL Lightbulbs',
    'Paper',
    'Aluminum Cans',
    'Cardboard',
    'Newspapers',
    'Plastic Bottles',
    'Glass Containers',
    'Glossy Magazines',
    'Oil-Based Paints',
    'Christmas Trees'
  ];

  const topList = top.map((item, i) => {
    return (
      <ListItem button onPress={() => handleItemPress(item)} key={i} noIndent>
        <Left>
          <Text>{item}</Text>
        </Left>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    );
  });
  return (
    <Container>
      <Header searchBar rounded style={{ backgroundColor: "#23A75B" }}>
        <Item>
          <Icon name="ios-search" />
          <TextInput onChangeText={text => setSearchInput(text)} placeholder="Search" />
          <Right style={{marginRight: 10}}>
          <Icon name="ios-people" />
          </Right>
        </Item>
        <Right style={{ flex: 0.25 }}>
          <Button onPress={handleSearchPress} transparent>
            <Text style={{ color: 'white' }}>Go!</Text>
          </Button>
        </Right>
      </Header>
      <Content >
        <Text style={{ textAlign: "center", color: "#23A75B", fontWeight: "bold", marginTop: 10, marginBottom: 10 }}>Top 10 Recyclables </Text>
        <List style={{ marginRight: 5, marginLeft: 5, borderWidth: 1, borderColor: "#D3D3D3" }}>
          {topList}
        </List>
      </Content>
    </Container>
  );
}

export default SearchScreen;
