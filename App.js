import React from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

import { Appointment, SectionTitle } from "./components";

const DATA = [
  {
    title: "16 May",
    data: [
      {
        time: "15:15",
        isActive: true,
        user: {
          fullname: "Rachel Charles",
          avatar: "https://randomuser.me/api/portraits/women/68.jpg",
          diagnosis: "Hand ligation"
        }
      },
      {
        time: "16:00",
        user: {
          fullname: "Bill Jackson",
          avatar: "https://randomuser.me/api/portraits/men/20.jpg",
          diagnosis: "regular inspection, No. 5"
        }
      },
      {
        time: "17:10",
        user: {
          fullname: "Ellie Morgan",
          avatar: "https://randomuser.me/api/portraits/women/88.jpg",
          diagnosis: "consultation, collarbone"
        }
      }
    ]
  },
  {
    title: "18 May",
    data: [
      {
        time: "14:20",
        user: {
          fullname: "Veronika Hart",
          avatar: "https://randomuser.me/api/portraits/women/64.jpg",
          diagnosis: "Knee injury, 1-st"
        }
      },
      {
        time: "15:15",
        user: {
          fullname: "Rachel Charles",
          avatar: "https://randomuser.me/api/portraits/women/68.jpg",
          diagnosis: "Hand ligation"
        }
      },
      {
        time: "16:00",
        user: {
          fullname: "Bill Jackson",
          avatar: "https://randomuser.me/api/portraits/men/20.jpg",
          diagnosis: "regular inspection, No. 5"
        }
      },
      {
        time: "17:10",
        user: {
          fullname: "Ellie Morgan",
          avatar: "https://randomuser.me/api/portraits/women/88.jpg",
          diagnosis: "consultation, collarbone"
        }
      }
    ]
  }
];

export default function App() {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Appointment {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
      <AddButton style={{ shadowOffset: { height: 4, width: 0 } }}>
        <Ionicons name="ios-add" size={40} color="white" />
      </AddButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;

const AddButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  bottom: 40px;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: rgba(72, 209, 204, 1);
  shadow-color: rgb(0, 150, 150);
  shadow-opacity: 0.25;
  shadow-radius: 6;
  elevation: 5;
`;
