import { resultsApi } from '@modules/results'
import { searchSlice } from '@modules/search'
import {
    Action,
    combineReducers,
    configureStore,
    PreloadedState,
    ThunkAction,
} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    search: searchSlice,
    [resultsApi.reducerPath]: resultsApi.reducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
    configureStore({
        reducer: {
            search: searchSlice,
            [resultsApi.reducerPath]: resultsApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(resultsApi.middleware),
        devTools: true,
        preloadedState,
    })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
