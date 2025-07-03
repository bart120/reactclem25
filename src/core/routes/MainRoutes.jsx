import React, {Suspense, lazy} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { BrandsList, Home, Login, NotFound } from '../../pages'
import CarsDetail from '../../pages/cars/CarsDetail'

const CarsAdd = lazy(() => import('../../pages/cars/CarsAdd'))
const CarsList = lazy(() => import('../../pages/cars/CarsList'))

function MainRoutes() {
  return (
    <Suspense fallback={<div>Chargement de la page...</div>}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brands/list" element={<BrandsList />} />
          <Route path="/cars/add" element={<CarsAdd />} />
          <Route path="/cars/list" element={<CarsList />} />
          <Route path="/cars/detail/:id" element={<CarsDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Suspense>
  )
}

export default MainRoutes