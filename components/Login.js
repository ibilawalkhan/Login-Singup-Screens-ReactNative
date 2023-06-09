import React from 'react'
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { ImageBackground } from 'react-native';


function Login({ navigation }) {
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");
    return (
        <ImageBackground
            style={styles.container}
            // source={{ uri: 'https://images.pexels.com/photos/673648/pexels-photo-673648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
            source={require('../assets/images/bg.jpg')}
        >
            <View style={styles.textView}>
                {/* <Text variant='displaySmall' style={{ fontWeight: 'bold' }}>Login</Text> */}
                <Text variant='labelLarge'>Please sign in to continue</Text>
            </View>

            <View style={styles.inputView}>
                <TextInput
                    label='Email'
                    value={text}
                    left={<TextInput.Icon icon="email" />}
                    onChangeText={text => setText(text)}
                />

                <TextInput
                    label='Password'
                    value={password}
                    secureTextEntry
                    left={<TextInput.Icon icon="eye" />}
                    onChangeText={password => setPassword(password)}
                />
            </View>

            <View>
                <Button mode="contained" style={styles.btn}>Login</Button>
            </View>

            <View style={[styles.bottomText, styles.txtAlign]}>
                <View>
                    <Text variant='titleSmall'> Don't have and account? </Text>
                    <Button mode="text" style={styles.signBtn} onPress={() => navigation.navigate('CreateAccount')}><Text style={styles.colorTxt}>Sign up</Text></Button>
                </View>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    textView: {
        marginTop: 10
    },
    inputView: {
        marginTop: 30,
    },
    btn: {
        marginTop: 30,
        backgroundColor: '#e35720',
        width: 120,
        marginLeft: 220,

    },
    bottomText: {
        marginTop: 300,
        marginLeft: 100,
    },
    txtAlign: {
        flexDirection: 'row'
    },
    colorTxt: {
        color: '#e35720',
        fontWeight: 'bold',
    },
});


export default Login;