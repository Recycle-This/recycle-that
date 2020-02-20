
import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, Content, List, ListItem, Left, Right } from 'native-base';
import { View} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
export default function HomeScreen () {
  const top = ['CFL Lightbulbs', 'Paper','Aluminum Cans','Cardboard', 'Newspapers', 'Plastic Bottles', 'Glass Containers', 'Glossy Magazines','Oil-Based Paints','Christmas Trees'];
  let topList = top.map((item,i) => {
    return(
      <ListItem key={i} noIndent style={{ backgroundColor: "white" }}>
        <Left>
          <Text>{item}</Text>
        </Left>
        <Right>
          <Icon name="arrow-forward"/>
        </Right>
      </ListItem>
    );    
  });
  return (
    <Container>
      <Header searchBar rounded style={{backgroundColor: "green"}}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text style={{color:'white'}}>Go!</Text>
        </Button>
      </Header>
      <Content >
        <Text style={{textAlign: "center", color:"green", fontWeight:"bold", marginTop: 10, marginBottom:10}}>Top 10 Recyclables </Text>
        <List style={{marginRight: 5, marginLeft:5, borderWidth:1, borderColor:"#D3D3D3"  }}>
          {topList}
        </List>
      </Content>
    </Container>
  );
}