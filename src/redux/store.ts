import { resultsApi } from '@modules/results'
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        [resultsApi.reducerPath]: resultsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(resultsApi.middleware),
    devTools: true,
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
