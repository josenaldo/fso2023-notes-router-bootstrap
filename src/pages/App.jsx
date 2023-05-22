import { useState } from 'react'

import { Navigate, Route, Routes, useMatch } from 'react-router-dom'

import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import NotePage from '@/pages/NotePage'
import NotesPage from '@/pages/NotesPage'
import UsersPages from '@/pages/UsersPages'

import { Footer, Header } from '@/features/layout'
import { Alert, Container } from 'react-bootstrap'

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'HTML is easy',
      important: true,
      user: 'Matti Luukkainen',
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false,
      user: 'Matti Luukkainen',
    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
      important: true,
      user: 'Arto Hellas',
    },
  ])

  const [user, setUser] = useState(null)

  const [message, setMessage] = useState(null)

  const login = (user) => {
    setUser(user)
    setMessage(`welcome ${user}`)
    setTimeout(() => {
      setMessage(null)
    }, 10000)
  }

  const match = useMatch('/notes/:id')
  const note = match
    ? notes.find((note) => note.id === Number(match.params.id))
    : null

  return (
    <div>
      <Header user={user} />

      {message && (
        <Container>
          <Alert variant="success">{message}</Alert>
        </Container>
      )}

      <Container as="main">
        <div>
          <Routes>
            <Route path="/notes/:id" element={<NotePage note={note} />} />
            <Route path="/notes" element={<NotesPage notes={notes} />} />
            <Route
              path="/users"
              element={user ? <UsersPages /> : <Navigate replace to="/login" />}
            />
            <Route path="/login" element={<LoginPage onLogin={login} />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default App
