import { configureStore } from "@reduxjs/toolkit";
import  rabReducer  from "./features/rab";
export const store = configureStore({
reducer:{
rab:rabReducer


}

})