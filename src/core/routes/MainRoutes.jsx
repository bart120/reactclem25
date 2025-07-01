import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { BrandsList, CarsAdd, CarsList, Home, Login, NotFound } from '../../pages'

function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands/list" element={<BrandsList />} />
        <Route path="/cars/add" element={<CarsAdd />} />
        <Route path="/cars/list" element={<CarsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  )
}

export default MainRoutes