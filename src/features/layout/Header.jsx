import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack'

const Header = ({ user }) => {
  const padding = {
    padding: 5,
  }

  return (
    <Stack as="header" gap={3} className="mb-5">
      <div className="mt-5">
        <h1>Notes Router Bootstrap</h1>
      </div>

      <div>
        <Link style={padding} to="/">
          Home
        </Link>
        <Link style={padding} to="/notes">
          Notes
        </Link>
        <Link style={padding} to="/users">
          Users
        </Link>
        {user ? (
          <em>{user} logged in</em>
        ) : (
          <Link style={padding} to="/login">
            Login
          </Link>
        )}
      </div>
    </Stack>
  )
}

export default Header
