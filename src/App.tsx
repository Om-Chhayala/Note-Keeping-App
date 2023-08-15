// import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import './App.css'
import {Routes,Route,Navigate} from "react-router-dom"
import { Newnote } from "./conponents/Newnote"

export type Note = {
  id:string
} & Notedata    // 

export type Notedata = {
  title: string,
  markdown: string,
  tags: Tag[]
}

export type Tag = {
  id:string,
  label:string
}

function App() {
  return (

<Container className="my-4">
<Routes>
    <Route path="/" element={<>Home</>} />
    <Route path="/new" element={<Newnote/>} />
    <Route path="/:id">
      <Route index element={<>Show</>} />
      <Route path="edit" element={<>Edit</>} />
    </Route>
    <Route path="*" element={< Navigate to ="/" />} />
</Routes>
</Container>

)
}

export default App

// https://www.evernote.com/shard/s376/sh/12049f77-5729-09d6-08b2-eeb1168cda8f/
// notes link