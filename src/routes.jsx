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
                <Route exact path="/" component={Home} />
                <Route path="/media" component={Media} />
                <Route path="/contact" component={Contact} />
                <Route path="/specs" component={Specs} />
                <Route path="/photos" component={Photos} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
