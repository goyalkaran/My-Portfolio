import { Router } from 'express'
import React from 'react'
import Home from '../../../../../online-ide-full/frontend/online-ide/src/core/home/page/home'
import ErrorComponent from '../shared/components/ErrorComponent'

const routes = () => {
  return (
    <div>
        <Router>
                <Route path="/" element={<Home/>}/>
                <Route path="/error" element={<ErrorComponent/>}/>
        </Router>
    </div>
  )
}

export default routes
