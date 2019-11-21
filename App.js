import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Orientation from 'react-native-orientation-locker'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
import { createAppContainer } from 'react-navigation'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import i18n from './language/i18n'
import { setTopLevelNavigator } from './utils/navigation'
import AppStack from './navigator'
// import StaticPage from './components/static-page'
import store from './store'
import { setStaticList } from './actions/staticList'
import {
  fetchPrefectures, fetchNationalities, fetchJlptlevels, fetchSituations,
  fetchPeriods, fetchWorkingTypes, fetchOccupations, fetchResidentMethods, fetchEventTypes
} from './utils/api';

const persistor = persistStore(store)

// persistor.purge()

const Navigation = createAppContainer(AppStack)

const mapStateToProps = state => ({
  eventTypes: state.eventTypes
})

export const App = connect(mapStateToProps)(function ({ eventTypes, dispatch }) {
  /**
   * Get static list like prefectures, nationalities,...
   * Store to redux-store that can be used some where.
   */
  async function getStaticList() {
    try {
      const [
        prefecturesRes,
        nationalitiesRes,
        jlptlevelsRes,
        situationsRes,

        periodsRes,
        workingTypesRes,
        occupationsRes,
        residentMethodsRes,
        eventTypesRes
      ] = await Promise.all([
        fetchPrefectures(),
        fetchNationalities(),
        fetchJlptlevels(),
        fetchSituations(),

        fetchPeriods(),
        fetchWorkingTypes(),
        fetchOccupations(),
        fetchResidentMethods(),
        fetchEventTypes()
      ])

      const data = {
        prefectures: prefecturesRes.data._data.prefectures,
        nationalities: nationalitiesRes.data._data.nationalities,
        jlpt_levels: jlptlevelsRes.data._data.jlptLevels,
        situations: situationsRes.data._data.situations,

        periods: periodsRes.data._data.periods,
        working_types: workingTypesRes.data._data.working_types,
        occupations: occupationsRes.data._data.occupations,
        resident_methods: residentMethodsRes.data._data.resident_methods,
        eventTypes: eventTypesRes.data._data.categories
      }

      dispatch(setStaticList(data))
    }
    catch (error) {
      console.log("Error when fetching prefectures, nationalities, jlptlevels", error)
    }
  }

  // `prefectures` present for all static list.
  if (eventTypes.length == 0) {
    getStaticList();
  }

  return (
    <React.Fragment>
      <Navigation ref={setTopLevelNavigator} />
      {/* <StaticPage /> */}
    </React.Fragment>
  )
})

function Root() {
  // Act like `componentDidMount`
  useEffect(() => {
    Orientation.lockToPortrait()
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  )
}

export default Root

// Change i18n language
store.subscribe(() => {
  const state = store.getState()

  if (i18n.language != state.language) {
    i18n.changeLanguage(state.language)
  }
})