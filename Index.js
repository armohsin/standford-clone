import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native';

const Index = () => {
  return (
<ScrollView>
    <View  >
      
        <View style={{flexDirection:"row",marginTop:30 , backgroundColor:"#8c1515", padding:5}} >
            <Text style={{color:"white",fontSize:15 ,fontWeight: "bold",paddingLeft:5}} >Stanford University</Text>
            <Text style={{color:"white",fontSize:15 ,fontWeight: "bold",paddingLeft:130}} >CSID LOGIN</Text>
        </View>

        <View style={{paddingTop:20,paddingBottom:10,paddingLeft:5}} >
            <Text style={{ fontSize:40 ,color:"#8c1515",fontWeight:"600"}} >Stanford</Text>
            <Text style={{ fontSize:25 ,color:"#1b1b1b",fontWeight:"600"}}>ENGINEERING</Text>
            <Text style={{ fontSize:25 ,color:"#1b1b1b",fontWeight:"400"}}>Computer Science</Text>
        </View>

        <View style={{backgroundColor:"#1b1b1b",padding:10}} >
            <Text style={{textAlign:"center",color:"white"}} >MENU</Text>
        </View>
        <View style={{paddingTop:20,paddingBottom:10,paddingLeft:5,paddingRight:5, backgroundColor:"#eae9e3"}} >
            <Text>CAROUSAL</Text>
        </View>

        <View style={{paddingTop:20,paddingBottom:10,paddingLeft:10,paddingRight:10 , backgroundColor:"#eae9e3" }}>
            <Text style={{fontSize:25,color:"#1b1b1b",fontWeight:"200"}} >News</Text>
            <View style={{backgroundColor:"#c0c0c0",height:1,width:340}}></View>
            

                <View style={{padding:20}} >
                    <View style={{display:"flex"}}>
                        <Image 
                        style={{
                            width: 150,
                            height: 90,
                            borderColor:"#d3d3d3",
                            borderWidth:5
                            }} source={require('./img/img1.jpg')} />
                            <View style={{position:"absolute",paddingLeft:150}}>
                            <Text style={{color:"#696969", fontSize:12,fontWeight:"600",paddingLeft:10,paddingBottom:5}} >TUESDAY, MAY 24, 2022</Text>
                            <Text style={{color:"#8c1515",fontSize:12,fontWeight:"bold",paddingLeft:10,paddingBottom:5}} >ROBERT B. TUCKER, IT SPECIALIST TO STANFORD COMPUTER SCIENCE, HAS DIED</Text>
                            <Text style={{fontSize:12,fontWeight:"400",paddingLeft:10,paddingBottom:5}} >A Stanford alumnus, our fellow CS IT specialist and a fixture at the university for more than 50 years, Tucker was 81 years old.</Text>
                            
                            </View>
                    </View>
                    <View style={{display:"flex",paddingTop:100}}>
                        <Image 
                        style={{
                            width: 150,
                            height: 90,
                            borderColor:"#d3d3d3",
                            borderWidth:5,
                            
                            }} source={require('./img/img2.jpg')} />

                            <View style={{position:"absolute",paddingLeft:150,paddingTop:100}}>

                            <Text style={{color:"#696969", fontSize:12,fontWeight:"600",paddingLeft:10,paddingBottom:5}} >TUESDAY, MAY 2, 2022</Text>
                            <Text style={{color:"#8c1515",fontSize:12,fontWeight:"bold",paddingLeft:10,paddingBottom:5}} >ROBERT B. TUCKER, IT SPECIALIST TO STANFORD COMPUTER SCIENCE, HAS DIED</Text>
                            <Text style={{fontSize:12,fontWeight:"400",paddingLeft:10,paddingBottom:5}} >A Stanford alumnus, our fellow CS IT specialist and a fixture at the university for more than 50 years, Tucker was 81 years old.</Text>
                            
                            </View>
                    </View>
                    <View style={{flexDirection:"row",paddingTop:100}}>
                        <Image 
                        style={{
                            width: 150,
                            height: 90,
                            borderColor:"#d3d3d3",
                            borderWidth:5,
                            
                            }} source={require('./img/img3.jpg')} />

                            <View style={{}}>

                            <Text style={{color:"#696969", fontSize:12,fontWeight:"600",paddingLeft:10,paddingBottom:5}} >TUESDAY, MAY 2, 2022</Text>
                            <Text style={{color:"#8c1515",fontSize:12,fontWeight:"bold",paddingLeft:10,paddingBottom:5}} >ROBERT B. TUCKER, {'\n'}IT SPECIALIST TO {'\n'}STANFORD COMPUTER {'\n'}SCIENCE, HAS DIED</Text>
                            <Text style={{fontSize:12,fontWeight:"400",paddingLeft:10,paddingBottom:5}} >A Stanford alumnus, our {'\n'}fellow CS IT specialist {'\n'}and a fixture at the {'\n'}university for more than {'\n'}50 years, Tucker was 81 {'\n'}years old.</Text>
                            
                            </View>
                    </View>
                    
                    <Text style={{fontSize:12,color:"#c0c0c0"}} >New More Stories {'>>'}</Text>
                </View>
                
        </View>

        <View style={{paddingTop:20,paddingBottom:10,paddingLeft:10,paddingRight:10,backgroundColor:"#eae9e3" }}>
                         
        <Text style={{fontSize:25,color:"#1b1b1b",fontWeight:"100"}} >Events</Text>
            <View style={{backgroundColor:"#c0c0c0",height:1,width:340}}></View>
            <View style={{padding:10}}> 
                    <View>
                    <Text style={{color:"#696969", fontSize:12,fontWeight:"600",paddingLeft:10,paddingBottom:5}} >MONDAY, OCTOBER 24</Text>
                     <Text style={{color:"#8c1515",fontSize:12,fontWeight:"bold",paddingLeft:10,paddingBottom:5}} >AZBIL INFO SESSION [PACKARD BUILDING, ROOM 202]</Text>
                     <Text style={{fontSize:12,fontWeight:"400",paddingLeft:10,paddingBottom:5}} >12:00 pm to 1:00 pm</Text>
                    </View>
          </View>   
          <View style={{padding:10}}> 
                    <View>
                    <Text style={{color:"#696969", fontSize:12,fontWeight:"600",paddingLeft:10,paddingBottom:5}} >MONDAY, OCTOBER 24</Text>
                     <Text style={{color:"#8c1515",fontSize:12,fontWeight:"bold",paddingLeft:10,paddingBottom:5}} >AZBIL INFO SESSION [PACKARD BUILDING, ROOM 202]</Text>
                     <Text style={{fontSize:12,fontWeight:"400",paddingLeft:10,paddingBottom:5}} >12:00 pm to 1:00 pm</Text>
                    </View>
          </View>   
          <View style={{padding:10}}> 
                    <View>
                    <Text style={{color:"#696969", fontSize:12,fontWeight:"600",paddingLeft:10,paddingBottom:5}} >MONDAY, OCTOBER 24</Text>
                     <Text style={{color:"#8c1515",fontSize:12,fontWeight:"bold",paddingLeft:10,paddingBottom:5}} >AZBIL INFO SESSION [PACKARD BUILDING, ROOM 202]</Text>
                     <Text style={{fontSize:12,fontWeight:"400",paddingLeft:10,paddingBottom:5}} >12:00 pm to 1:00 pm</Text>
                    </View>
          </View>   
          <View style={{padding:10}}> 
                    <View>
                    <Text style={{color:"#696969", fontSize:12,fontWeight:"600",paddingLeft:10,paddingBottom:5}} >MONDAY, OCTOBER 24</Text>
                     <Text style={{color:"#8c1515",fontSize:12,fontWeight:"bold",paddingLeft:10,paddingBottom:5}} >AZBIL INFO SESSION [PACKARD BUILDING, ROOM 202]</Text>
                     <Text style={{fontSize:12,fontWeight:"400",paddingLeft:10,paddingBottom:5}} >12:00 pm to 1:00 pm</Text>
                    </View>
          </View> 
          <View style={{padding:10,paddingBottom:30}}> 
          <Text style={{fontSize:12,color:"#c0c0c0"}} >New More Stories {'>>'}</Text>    
          </View>              
        </View>         

        <View style={{backgroundColor:"#c8bcac",height:20}} />

        <View style={{backgroundColor:"#fbfaf6",padding:30}}>
            <Text style={{fontSize:12}} >Gates Computer Science Building
            {'\n'}353 Jane Stanford Way
            {'\n'}Stanford, CA 94305
            {'\n'}
            {'\n'}<Text style={{fontWeight:"bold"}} >Phone:</Text> (650) 723-2300
            {'\n'}
            {'\n'}<Text style={{fontWeight:"bold"}} >Admissions :</Text>{'\n'}<Text style={{color:"#8c1515"}}>admissions@cs.stanford.edu
            {'\n'}
            {'\n'}Campus Map</Text>
            </Text>
        </View>
        <View>
            <View  style={{backgroundColor:"#8c1515", height:30}} />
            <View style={{backgroundColor:"#8c1515",height:2,shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 12,
                },
                shadowOpacity: 0.46,
                shadowRadius: 11.14,

                elevation: 24}} ></View>
            <View style={{backgroundColor:"#8c1515",paddingTop:30,paddingBottom:30}}>
                <Text style={{fontSize:35,color:"white",textAlign:"center"}} >Stanford
                {'\n'}<Text style={{fontSize:20,color:"white"}} >University</Text></Text>
                <View style={{flexDirection:"row",padding:20,paddingLeft:60}} >
                    <Text style={{paddingRight:10,color:"white", fontSize:15,fontWeight:"100"}}>
                    Stanford Home
                    {'\n'}Maps & {'\n'}Directions
                    {'\n'}Search {'\n'}Stanford
                    {'\n'}Emergency Info
                    </Text>
                    <Text style={{paddingLeft:10,color:"white", fontSize:15,fontWeight:"100"}}>
                    Stanford Home
                    {'\n'}Terms of Use
                    {'\n'}Privacy
                    {'\n'}Copyright
                    {'\n'}Trademarks
                    {'\n'}Non-Discrimination
                    {'\n'}Accessibility
                    </Text>
                </View>
                <Text style={{fontSize:10,color:"white",textAlign:"center"}}>© Stanford University, Stanford, California 94305.</Text>
            </View>
        </View>


    </View>
</ScrollView>
  )
}

export default Index