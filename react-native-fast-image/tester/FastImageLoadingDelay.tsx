import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import {source} from './utils/imageUri';

export function FastImageLoadingDelay(): JSX.Element {
  const [data, setData] = React.useState([]);
  const [time, setTime] = React.useState(0);
  const [startTime, setStartTime] = React.useState(0);
  const [lostStr, setLoadStr] = React.useState("点击加载");
  let endNum =0;
  let rows = 100;
  let clumns =7;
  
  const loadOnPress=()=> {
    setLoadStr("开始加载")
    setTime(0)
    setStartTime((new Date()).valueOf())
    const newData =[]
    for(let i=0;i<rows;i++){
      newData.push(i);
    }
    setData(newData);
  }
  const hideOnPress=()=> {
    setData([]);
  }

  return (
    <View style={styles.container}>
      <Tester>
        <TestSuite name='加载速度测试'>
          <TestCase itShould='平台'><Text style={{paddingLeft:20}}>FastImage-RN-{Platform.OS}</Text></TestCase>
          <TestCase itShould='加载图片'><Text onPress={loadOnPress} style={styles.label}>{lostStr} 用时{time}</Text></TestCase>
          <TestCase itShould='hide image'><Text onPress={hideOnPress} style={styles.label}>hide</Text></TestCase>
        </TestSuite>
      </Tester>

        <ScrollView>
        {
          data.map(item =>{ 
            return (
            <View style ={styles.item}>
              <FastImage source={{ uri: 'https://dummyimage.com/200x200/0000f0/fff&text='+source[item*clumns] }} style={styles.image} onLoadEnd={()=>{
                endNum++;
                if(endNum == source.length ){
                  setTime(((new Date()).valueOf() -startTime)/1000)
                }
              }} />
              <FastImage source={{ uri: 'https://dummyimage.com/200x200/0000f0/fff&text='+source[item*clumns+1] }} style={styles.image} onLoadEnd={()=>{
                endNum++;
                if(endNum == source.length ){
                  setTime(((new Date()).valueOf() -startTime)/1000)
                }
              }} />
              <FastImage source={{ uri: 'https://dummyimage.com/200x200/0000f0/fff&text='+source[item*clumns+2] }} style={styles.image} onLoadEnd={()=>{
                endNum++;
                if(endNum == source.length ){
                  setTime(((new Date()).valueOf() -startTime)/1000)
                }
              }} />
              <FastImage source={{ uri: 'https://dummyimage.com/200x200/0000f0/fff&text='+source[item*clumns+3] }} style={styles.image} onLoadEnd={()=>{
                endNum++;
                if(endNum == source.length ){
                  setTime(((new Date()).valueOf() -startTime)/1000)
                }
              }} />
              <FastImage source={{ uri: 'https://dummyimage.com/200x200/0000f0/fff&text='+source[item*clumns+4] }} style={styles.image} onLoadEnd={()=>{
                endNum++;
                if(endNum == source.length ){
                  setTime(((new Date()).valueOf() -startTime)/1000)
                }
              }} />
              <FastImage source={{ uri: 'https://dummyimage.com/200x200/0000f0/fff&text='+source[item*clumns+5] }} style={styles.image} onLoadEnd={()=>{
                endNum++;
                if(endNum == source.length ){
                  setTime(((new Date()).valueOf() -startTime)/1000)
                }
              }} />
              <FastImage source={{ uri: 'https://dummyimage.com/200x200/0000f0/fff&text='+source[item*clumns+6] }} style={styles.image} onLoadEnd={()=>{
                endNum++;
                if(endNum == source.length ){
                  setTime(((new Date()).valueOf() -startTime)/1000)
                }
              }} />
            </View>)
          })
        }
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    width: '100%',
    flexDirection:'row'
  },
  image: {
    width: 50,
    height: 50,
    borderColor:'red',
    borderWidth:5
  },
  label: {
    marginTop: Platform.OS === 'ios' ? 50 : 0,
    width: '100%',
    fontSize: 30,
    textAlign: 'center',
  },
  label2: {
    width: '100%',
    fontSize: 16,
    textAlign: 'center',
  },
});