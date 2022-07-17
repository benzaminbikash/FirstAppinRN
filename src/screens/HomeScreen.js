/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Ionicons from 'react-native-vector-icons/Ionicons';
import courses from '../components/Course';

const HomeScreen = ({navigation}) => {
  const CourseCard = ({course}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => navigation.navigate('CourseScreen', {data: course})}>
        <ImageBackground
          style={{
            marginVertical: 10,
            marginHorizontal: 5,
            borderRadius: 15,
            width: windowWidth / 2 - 30,
            height: windowHeight / 3,
            overflow: 'hidden',
            paddingTop: 25,
            paddingBottom: 20,
          }}
          source={course.image}>
          <Text style={{fontSize: 20, paddingBottom: 5, fontWeight: 'bold'}}>
            {course.name}
          </Text>
          <Text style={{fontWeight: '600'}}>
            {course.totalCourse + ' Courses'}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 20,
      }}>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Hello Bikash Benzamin
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'gray',
            marginTop: 15,
          }}>
          Find a course you want to learn
        </Text>
        <View
          style={{
            marginVertical: 20,
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
            borderWidth: 1,
            paddingVertical: 5,
            paddingLeft: 15,
            borderRadius: 5,
          }}>
          <Ionicons name="search" size={25} />
          <TextInput
            style={{marginLeft: 10, fontSize: 15}}
            placeholder="Search your book"
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Categories
          </Text>
          <Text style={{color: 'blue', fontWeight: 'bold'}}>See all</Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={courses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <CourseCard course={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
