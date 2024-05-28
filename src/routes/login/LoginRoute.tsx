import { Button, Container, ContentLayout, Form, Header, SpaceBetween } from "@cloudscape-design/components"
import { useState } from "react"

export function Component() {
  // const navigate = useNavigate()
  // const { jwtToken } = useSelector(mainSelector)

  // useEffect(() => {
  //   if (!jwtToken) {
  //     navigate("/login")
  //   }
  // }, [jwtToken])

  let childWindow: Window | null = null
  const [_receivedData, setReceivedData] = useState(null)

  function openLogin() {
    const iframeUrl = "http://localhost:5173/login"

    // Calculate the position to center the window
    const screenWidth = window.screen.width
    const screenHeight = window.screen.height
    const windowWidth = 556
    const windowHeight = 610
    const left = (screenWidth - windowWidth) / 2
    const top = (screenHeight - windowHeight) / 2

    childWindow = window.open(iframeUrl, "login", `width=${windowWidth},height=${windowHeight},left=${left},top=${top}`)
    window.addEventListener("message", handleMessage)
  }

    function handleMessage(event) {
      if (event.source === childWindow) {
        console.log(event.data)
        setReceivedData(event.data)
        childWindow?.close()
      }
    }

  return (
    <ContentLayout
      header={
        <Header variant="h1">Rinkagu</Header>
      }
    >
      <Form>
        <SpaceBetween size="l">
          <Container header={<Header variant="h2">Login</Header>}>
            <Button onClick={openLogin}>Log in</Button>
          </Container>
        </SpaceBetween>
      </Form>
    </ContentLayout>
  )
}
