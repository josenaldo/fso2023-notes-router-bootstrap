import { Button, Form, Stack, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const LoginPage = (props) => {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    props.onLogin('mluukkai')
    navigate('/')
  }

  return (
    <div>
      <h2>Login</h2>

      <Card padding={2}>
        <Card body>
          <Form onSubmit={onSubmit}>
            <Stack gap={3}>
              <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" name="username" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <div>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>
            </Stack>
          </Form>
        </Card>
      </Card>
    </div>
  )
}

export default LoginPage
