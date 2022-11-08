import React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from 'app/constant';

import { TLandingPageProps } from 'AppModels'

import logo from '../../..//logo.svg'
import '../../../App.css'

const LandingPage: React.FC<TLandingPageProps> = (): React.ReactElement => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to={Routes.SPELLS}>Click here to take a tour</Link>
      </header>
    </div>
  )
}

export default LandingPage