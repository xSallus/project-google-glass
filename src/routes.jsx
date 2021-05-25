import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Contact from './pages/Contact'
import Home from './pages/Home'
import Media from './pages/Media'
import Photos from './pages/Photos'
import Specs from './pages/Specs'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={()=><Home title="Home" />} />
                <Route path="/media" render={()=><Media title="Media" />} />
                <Route path="/contact" render={()=><Contact title="Contact" />} />
                <Route path="/specs" render={()=><Specs title="Specs" />} />
                <Route path="/photos" render={()=><Photos title="Photos" />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
