import { createSlice,createAsyncThunk,PayloadAction   } from "@reduxjs/toolkit";
import  {AuthAction,
    AuthState,
     SIGN_OUT,
    NEED_VERIFICATION,
    SET_SUCCESS } from "../index";
    import { RootState, store } from '../store';
import { SignUpData, User } from './../index';
import firebase from '../../firebase/config'



      
const initialState: AuthState = {
    user: null,
    authenticated: false,
    loading: false,
    error: '',
    needVerification: false,
    success: ''
  }
    


    const authSlice = createSlice({
        name: 'authSlice',
        initialState,
        reducers: {
            SET_USER:(state, action: PayloadAction<User>)=> {
            state.user = action.payload;
          },
          SET_LOADING(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
          },
          SET_ERROR(state, action: PayloadAction<string>) {
            state.error = action.payload;
          },
          NEED_VERIFICATION(state, action: PayloadAction<boolean>) {
            state.needVerification = action.payload;
          },
        },
      });


    export const register = (data:SignUpData,onError: ()=> string ) => async (dispatch: any) => {
        try {
          dispatch(SET_LOADING(true));
          const res = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password as string);
          if(res.user) {
            const userData: User = {
              email: data.email,
              userName: data.userName,
              id: res.user.uid,
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };
            await firebase.firestore().collection('/users').doc(res.user.uid).set(userData);
            await res.user.sendEmailVerification();
            dispatch({
              type: NEED_VERIFICATION
            });
            dispatch({
              type: SET_USER,
              payload: userData
            });
          }
        }catch (err) {
            console.log(err);
            onError();
            dispatch({
              type: SET_ERROR,
              payload: err.message
            });
          }
      }
    

    





      
    //   export const login = (email: string, password: string) => async (dispatch: any) => {
    //     try {
    //       dispatch(SET_LOADING(true));
    //       const userCredential = await auth.signInWithEmailAndPassword(email, password);
    //       const { user } = userCredential;
    //       dispatch(SET_USER({ email: user.email, displayName: user.displayName || '' }));
    //     } catch (error) {
    //       dispatch(SET_ERROR(error.message));
    //     } finally {
    //       dispatch(SET_LOADING(false));
    //     }
    //   };

  
  export const {SET_USER,SET_LOADING, SET_ERROR } = authSlice.actions;
  export default authSlice.reducer;