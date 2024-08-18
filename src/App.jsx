import React, { Fragment } from 'react'
import {useRoutes} from 'react-router-dom'
// 引入路由表
import routes from './routes'

const App = () => {
  const ele = useRoutes(routes)
  return (
    <Fragment>
      {ele}
    </Fragment>
  )
}
export default App