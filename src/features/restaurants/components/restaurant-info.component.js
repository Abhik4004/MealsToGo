import React from "react";
import { Text, Card } from "react-native-paper";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Abhik Restaurant",
    icon,
    photos = [
      "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg",
    ],
    address = "100 Random Stree",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarilt = false,
  } = restaurant;
  return (
    <>
      <Card elevation={5} style={style.card}>
        <Card.Cover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </Card>
    </>
  );
};

const style = StyleSheet.create({
  card: { marginBottom: "50px" },
});

const Title = styled.Text`
  color: blue;
  padding: 16px;
  text-align: left;
  height: 50px;
`;
