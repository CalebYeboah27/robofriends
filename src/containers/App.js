import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setSearchField } from '../features/searchField/searchFieldSlice'
import { useFetchRobotsQuery } from '../features/robotsApi/robotsApiSlice'
import ErrorBoundary from '../components/ErrorBoundary'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import Header from '../components/Header'
import './App.css'

const App = () => {
  const searchField = useSelector(state => state.searchField.searchField)
  const dispatch = useDispatch()
  const { data: robots = [], isLoading } = useFetchRobotsQuery()

  const [filteredRobots, setfilteredRobots] = useState(robots)

  useEffect(() => {
    const newFilteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    )

    setfilteredRobots(newFilteredRobots)
  }, [robots, searchField])

  const onSearchChange = event => {
    // action is dispatched here when the search field is changed in the input field
    dispatch(setSearchField(event.target.value.toLowerCase()))
  }
  if (isLoading) {
    return <h1>Loading...</h1>
  } else {
    console.log('Header')
    return (
      <div className="App">
        <Header />
        <SearchBox handleSearchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

export default App
