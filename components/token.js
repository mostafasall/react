// import AsyncStorage from 'async-storage';

// export default ()=>{

// const storeData = async (value) => {
//     try {
//       await AsyncStorage.setItem('@storage_Key', value)
//     } catch (e) {
//       // saving error
//     }
//   }
// const  getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('@storage_Key')
//       if(value !== null) {
//         // value previously stored
//       }
//     } catch(e) {
//       // error reading value
//     }
//   }
// //   getData = async () => {
// //     try {
// //       const jsonValue = await AsyncStorage.getItem('@storage_Key')
// //       return jsonValue != null ? JSON.parse(jsonValue) : null;
// //     } catch(e) {
// //       // error reading value
// //     }
// //   }
// }