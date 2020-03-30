import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

export default Group = ({ user, diagnosis, isActive, time }) => (
  <GroupItem>
    <Avatar source={{ uri: user.avatar }} />
    <View style={{ flex: 1 }}>
      <FullName>{user.fullname}</FullName>
      <Treatment>{user.diagnosis}</Treatment>
    </View>
    <DateContainer active={isActive}>
      <GroupDate active={isActive}>{time}</GroupDate>
    </DateContainer>
  </GroupItem>
);

Group.defaultProps = {
  title: "Untitled",
  items: []
};

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 2px;
  border-bottom-color: #f3f3f3;
`;

const Avatar = styled.Image`
  margin-right: 20px;
  border-radius: 50px;
  width: 50px;
  height: 50px;
`;

const FullName = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: #232323;
  text-transform: uppercase;
`;

const Treatment = styled.Text`
  font-weight: 400;
  font-size: 15px;
  color: #505050;
`;

const DateContainer = styled.View`
  background: ${props =>
    props.active ? "rgba(72, 209, 204, 1)" : "rgba(72, 209, 204, 0.2)"};
  width: 60px;
  height: 30px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const GroupDate = styled.Text`
  color: ${props =>
    props.active ? "rgba(255, 255, 255, 1)" : "rgba(10, 130, 130, 1)"};
  font-size: 14px;
  font-weight: 700;
`;
