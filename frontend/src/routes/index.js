import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import RegisterPerson from '../pages/RegisterPerson'
import RegisterAvatar from '../pages/RegisterAvatar'
import RegisterChallenge from '../pages/RegisterChallenge'
import Dashboard from '../pages/Dashboard'
import Ranking from '../pages/Ranking'

function routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={RegisterPerson} />
            <Route path="/register/avatar" component={RegisterAvatar} />
            <Route path="/register/challenge" component={RegisterChallenge} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Dashboard" component={Ranking} />
        </Switch>
    )
}

export default routes