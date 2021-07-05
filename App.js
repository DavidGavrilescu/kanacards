import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {randomHiragana} from './components/randomHiragana.js';
import {toRomaji, toKatakana, toHiragana} from 'wanakana';

const App = () => {
  const [char, setChar] = useState(randomHiragana());
  const [currentKana, setCurrentKana] = useState('hiragana');
  const [isRevealed, setIsRevealed] = useState(false);

  const handleChangeKana = () => {
    if (currentKana === 'hiragana') {
      setCurrentKana('katakana');
    } else {
      setCurrentKana('hiragana');
    }
  };
  const handleReveal = () => {
    setIsRevealed(true);
  };
  const handleNewKana = () => {
    setChar(randomHiragana());
    setIsRevealed(false);
  };

  useEffect(() => {});
  return (
    <View style={styles.screen}>
      <Text style={styles.switchKana} onPress={handleChangeKana}>
        {currentKana === 'hiragana'
          ? `${toKatakana('katakana')}`
          : `${toHiragana('hiragana')}`}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleNewKana}>
        <Text style={styles.buttonText}>
          {currentKana === 'hiragana' ? char : toKatakana(char)}
        </Text>
      </TouchableOpacity>
      <Text style={styles.romajiText} onPress={handleReveal}>
        {isRevealed ? toRomaji(char) : 'REVEAL'}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 300,
    backgroundColor: 'red',
  },
  switchKana: {
    fontSize: 20,
    color: 'black',
    position: 'absolute',
    right: 14,
    top: 7,
  },
  romajiText: {
    fontSize: 30,
    color: 'black',
    paddingTop: 20,
  },
  buttonText: {
    fontSize: 150,
    color: 'white',
  },
});

export default App;
