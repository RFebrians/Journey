import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SharedElement } from 'react-navigation-shared-element';
import * as Animatable from 'react-native-animatable';

const { height } = Dimensions.get('window');
const ITEM_HEIGHT = height * 0.5;

const DetailScreen2 = ({ navigation, route }) => {
  const { item, dataDetail } = route.params;
  const buttonRef = React.useRef();

  return (
    <View style={{ flex: 1, backgroundColor: '#0f0f0f' }}>
      <SharedElement id={`item.${item.id}.image_url`}>
        <Image
          source={{ uri: item.image_url }}
          style={{
            width: '100%',
            height: ITEM_HEIGHT,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
          }}
          resizeMode='cover'
        />
      </SharedElement>
      <Animatable.View
        ref={buttonRef}
        animation='fadeIn'
        duration={600}
        delay={300}
        style={[StyleSheet.absoluteFillObject]}
      >
        <MaterialCommunityIcons
          name='close'
          size={28}
          color='#fff'
          style={{
            position: 'absolute',
            top: 40,
            right: 20,
            zIndex: 2
          }}
          onPress={() => {
            buttonRef.current.fadeOut(100).then(() => {
              navigation.goBack();
            });
          }}
        />
      </Animatable.View>
      <View
        style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 20 }}
      >
        <SharedElement id={`item.${item.id}.iconName`}>
          <SimpleLineIcons size={40} color='white' name={item.iconName} />
        </SharedElement>
        <View style={{ flexDirection: 'column', paddingLeft: 6 }}>
          <SharedElement id={`item.${item.id}.title`}>
            <Text
              style={{
                color: 'white',
                fontSize: 24,
                fontWeight: 'bold',
                lineHeight: 28
              }}
            >
              {item.title}
            </Text>
          </SharedElement>
          <SharedElement id={`item.${item.id}.description`}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
                lineHeight: 18
              }}
            >
              {item.description}
            </Text>
          </SharedElement>
        </View>
      </View>
      <ScrollView
        indicatorStyle='white'
        style={{
          paddingHorizontal: 20,
          backgroundColor: '#0f0f0f'
        }}
        contentContainerStyle={{ paddingVertical: 20 }}
      >
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            lineHeight: 24,
            marginBottom: 4
          }}
        >
         Where ever you Go , May your heart lead into a straight path .

To know , that we are wandering , through times , 
into a beautiful journey for ever wandering .

What was happen , is a better for you that reach to overcome it . 
So strong , We are never preparin for this before , but somehow ... Who knows 
        {JSON.stringify(item)}
        </Text>
        <Text>dataDetail: {JSON.stringify(dataDetail)}</Text>
        
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            lineHeight: 24,
            marginBottom: 4
          }}
        >
         
          It is going Better , for the Ones who never givin up .
          Through times ,we are leavin mark to rail and trails .
          Day and Night are just yesterday .
          Sailing The Ocean , Embrace the Wind , Overflowin the River. 

        </Text>
      </ScrollView>
    </View>
  );
};

DetailScreen2.sharedElements = route => {
  const { item, dataDetail } = route.params;
  return [
    {
      id: `item.${item.id}.image_url`,
      animation: 'move',
      resize: 'clip'
    },
    {
      id: `item.${item.id}.title`,
      animation: 'fade',
      resize: 'clip'
    },
    {
      id: `item.${item.id}.description`,
      animation: 'fade',
      resize: 'clip'
    },
    {
      id: `item.${item.id}.iconName`,
      animation: 'move',
      resize: 'clip'
    }
  ];
};

export default DetailScreen2;