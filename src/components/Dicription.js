import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Phone from '../components/routs.js/Phone'
import Mac from '../components/routs.js/mac'
import Air from '../components/routs.js/air'
function Dicription() {
    return (
        <div>
<Switch>
            <Route  path='/pho' component={Phone}/>
            <Route path='/mac' component={Mac}/>
            <Route path='/air' component={Air}/>
</Switch>


        </div>
    )
}

export default Dicription
