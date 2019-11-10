import { StyleSheet } from 'react-native';
import {
  COLOR_BASE_PRIMARY_MAIN,
  COLOR_BASE_ACCENT,
  COLOR_TEXT,
  COLOR_ERROR
} from '../../styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 30,
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },
  loading: {
    flexDirection: 'row'
  },
  text:{
    color: COLOR_TEXT,
  },
  text_err: {
    color: COLOR_ERROR
  }, 
  title_wrapper: {
    marginBottom: 50
  },
  title: {
    fontSize: 35
  },
  form_section: {
    marginBottom: 30
  },
  form_wrapper: {
    marginBottom: 30
  },
  form_input: {
    paddingBottom: 0,
  },
  pass_icon: {
    marginBottom: -15,
    width: 40,
    height: 40,
    justifyContent:'center',
    textAlign: 'center',
    paddingRight: 0,
  },
  btn_submit: {
    height: 50,
    elevation: 0,
    marginBottom: 10,
    backgroundColor: COLOR_BASE_ACCENT,
    justifyContent: 'center'
  },
  other_option: {
    flexDirection:'row',
    justifyContent: 'center'
  },
  btn_other: {
    fontWeight: 'bold',
    color: COLOR_BASE_ACCENT
  }
});

export default styles;