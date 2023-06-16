import { Routes, Route } from 'react-router-dom'
import IndexPage from '../pages/IndexPage'
import PhonesListPage from '../pages/PhonesListPage'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<IndexPage />} />
            <Route path='/phones' element={<PhonesListPage />} />

        </Routes>
    )
}

export default AppRoutes