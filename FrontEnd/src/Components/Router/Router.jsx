import {Route, Routes} from 'react-router-dom'
import {Home} from '../Home/Home';


export const Router = () => {
    return <Routes>
        <Route path='/' element={<Home/>}></Route>
    </Routes>
}