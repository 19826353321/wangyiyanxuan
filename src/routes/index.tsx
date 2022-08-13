import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home'

// import Partitions from "@/pages/Partitions";
// import Cat from "@/pages/Cat";
// import Cart from "@/pages/Cart";
// import Mine from "@/pages/Mine";
// import GoodsDetail from "@/pages/GoodsDetail";
// import Search from "@/pages/Search";
// import SearchDetail from "@/pages/SearchDetail";

const Partitions = lazy(() => import('@/pages/Partitions'))
const Cat = lazy(() => import('@/pages/Cat'))
const Cart= lazy(() => import('@/pages/Cart'))
const Mine= lazy(() => import('@/pages/Mine'))
const GoodsDetail = lazy(() => import('@/pages/GoodsDetail'))
const Search = lazy(() => import('@/pages/Search'))
const SearchDetail = lazy(() => import('@/pages/SearchDetail'))

const Demo = lazy(() => import('@/pages/demo'))

export default () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/partitions" element={<Partitions />}></Route>
                <Route path="/cat" element={<Cat />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/mine" element={<Mine />}></Route>
                <Route path="/goodsDetail/:id" element={<GoodsDetail />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/searchDetail/:index" element={<SearchDetail />}></Route>
                <Route path="/demo" element={<Demo/>}></Route>
            </Routes>
        </>
    )
}


