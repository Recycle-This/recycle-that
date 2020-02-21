
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, Header, Content, Icon, Accordion, Text, View, Button, Right } from "native-base";

const dataArray = [
  { title: "How to Recycle Christmas Tree", content: "Remove any ornaments, lights, tinsel or other decorations from the tree, as well as the stand\nPut a tarp under the tree before you haul it to the curb or your car to prevent needles from shedding on the floor. " },
  { title: "Where to Recycle", content: "Eco-Depot\n 2777 E Washington Blvd\n Boyle Heights, CA" },
];

function renderHeader(item, expanded) {
  return (
    <View style={{
      flexDirection: "row",
      padding: 10,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#A9DAD6"
    }}>
      <Text style={{ fontWeight: "600", color: "#505050" }}>
        {" "}{item.title}
      </Text>
      {expanded
        ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
        : <Icon style={{ fontSize: 18 }} name="add-circle" />}
    </View>
  );
}

function renderContent(item) {
  return (
    <View style={{ backgroundColor: "#e3f1f1" }}>
      <Text
        style={{
          backgroundColor: "#e3f1f1",
          padding: 10,
          fontStyle: "italic",
        }}
      >
        {item.content}
      </Text>
      <Right>
        <Button iconLeft bordered success style={{ backgroundColor: "white" }}>
          <Icon type="FontAwesome" name="recycle" style={{ color: "green" }} />
          <Text>I Recycled this</Text>
        </Button>
      </Right>
    </View>
  );
}

export default function DetailsScreen() {
  return (
    <Container>
      <Content padder style={{ backgroundColor: "white" }}>
        <Accordion
          dataArray={dataArray}
          animation={true}
          expanded={true}
          renderHeader={renderHeader}
          renderContent={renderContent}
        />
      </Content>
    </Container>
  );
}  