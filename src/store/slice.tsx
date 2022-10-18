import {createSlice} from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

export interface paraQty {
    value: number,
    html:string
  }

const initialState:paraQty={
    value:4,
    html:"No"
}

export const slice =createSlice({
    name:"paraQty",
    initialState,
    reducers:{
        changer:(state,action:PayloadAction<number>)=>{
            state.value=action.payload
        },
        htmlChanger:(state,action:PayloadAction<string>)=>{
            state.html=action.payload
    }
}
})

export const {changer,htmlChanger}=slice.actions
export default slice.reducer
