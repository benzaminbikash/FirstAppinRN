/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, SafeAreaView, ImageBackground, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {courseContent} from '../components/Course';
const CourseScreen = ({route}) => {
  const {data} = route.params;
  const BottomNavigationBar = () => {
    return (
      <View
        style={{
          height: 60,
          bottom: 0,
          zIndex: 100,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            height: 60,
            width: 70,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginRight: 10,
          }}>
          <Ionicons name="cart" size={25} color="red" />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'blue',
            height: 50,
            borderRadius: 40,
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Buy Now
          </Text>
        </View>
      </View>
    );
  };
  const CourseContentList = ({content, index}) => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 40, color: 'white', fontWeight: 'bold'}}>
          {'0' + (index + 1)}
        </Text>
        <View style={{paddingHorizontal: 20, flex: 1}}>
          <Text
            style={{
              fontSize: 15,
              color: '#fff',
              fontWeight: 'bold',
              marginBottom: 5,
            }}>
            {content.time}
          </Text>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
            {content.title}
          </Text>
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'red',
            borderRadius: 500,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name="play" style={{fontSize: 25, color: 'green'}} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <ImageBackground
        source={data.image}
        style={{
          height: 400,
          paddingTop: 40,
          paddingRight: 20,
          paddingLeft: 20,
        }}>
        <Image
          resizeMode="contain"
          style={{width: 150}}
          source={require('../assets/bestseller.png')}
        />
        <Text style={{fontSize: 25, fontWeight: 'bold', top: -30}}>
          Design Thinking
        </Text>
        <View
          style={{
            top: -25,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Ionicons name="people" size={25} />
          <Text
            style={{
              color: 'gray',
              fontWeight: 'bold',
              marginLeft: 5,
              marginRight: 5,
            }}>
            {data.students + ' k'}
          </Text>
          <Ionicons name="star" size={25} />
          <Text style={{color: 'gray', fontWeight: 'bold', marginLeft: 5}}>
            {data.star + ' k'}
          </Text>
        </View>
        <Text style={{top: -20, fontWeight: 'bold'}}>{'$' + data.price}</Text>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          marginTop: -35,
          backgroundColor: '#ff00ff',
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        }}>
        <Text
          style={{
            marginTop: 40,
            marginBottom: 20,
            marginHorizontal: 20,
            fontSize: 21,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Course Content
        </Text>
        <FlatList
          data={courseContent}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <CourseContentList index={index} content={item} />
          )}
        />
      </View>
      <View>
        <BottomNavigationBar />
      </View>
    </SafeAreaView>
  );
};
export default CourseScreen;
