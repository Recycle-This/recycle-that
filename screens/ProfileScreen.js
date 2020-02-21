import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import { SafeAreaView, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation, route }) => {
  const search = ['Search 1', 'Search 2', 'Search 3'];
  const searchList = search.map((item, i) => {
    return (
      <Button block light style={{ marginLeft: 10, marginRight: 10, marginBottom: 8 }} key={i}>
        <Text style={{ color: '#505050' }}>{item}</Text>
      </Button>
    );
  });
  const points = 40;

  return (
    <Container>
      <Header style={{ backgroundColor: "#23A75B" }}>
        <Body style={{ marginLeft: 20 }}>
          <Title>Dashboard</Title>
        </Body>
        <Right>
          <Button transparent>
            <Text style={{ color: '#aeeaae', fontSize: 11 }}>Sign out</Text>
          </Button>
        </Right>
      </Header>
      <Content>
        <Text style={{ textAlign: "center", color: "#23A75B", fontWeight: "bold", marginTop: 10, marginBottom: 10 }}>Previous Searches </Text>
        {searchList}
        <Text style={{ textAlign: "left", color: "#23A75B", fontWeight: "bold", fontSize: 18, marginTop: 25, marginBottom: 10, marginLeft: 15 }}>
          <Icon type="FontAwesome" name="handshake-o" style={{ color: "#23A75B", fontSize: 18 }} />
          <Text> Good Human Points</Text>
          <Text style={{ color: "#FFD700", marginLeft: 10 }}>{' ' + points}</Text>
        </Text>
        <Right>
          <Button bordered warning style={{ marginTop: 25 }}>
            <Icon name="heart" />
            <Text style={{ color: "#DAA520", paddingRight: 15 }}>I want to be a better human</Text>
          </Button>
        </Right>
      </Content>
    </Container>
  );
};

export default ProfileScreen;

