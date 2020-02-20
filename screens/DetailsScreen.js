
import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";

const dataArray = [
  { title: "First Search", content: "Data to populate" },
  { title: "Second Search", content: "Data to populate" },
  { title: "Third Search", content: "Data to populate" }
];

function renderHeader(item, expanded) {
  return (
    <View style={{
      flexDirection: "row",
      padding: 10,
      justifyContent: "space-between",
      alignItems: "center" ,
      backgroundColor: "#A9DAD6" }}>
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
    <Text
      style={{
        backgroundColor: "#e3f1f1",
        padding: 10,
        fontStyle: "italic",
      }}
    >
      {item.content}
    </Text>
  );
}

export default function DetailsScreen () {
  return (
    <Container>
      <Header />
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