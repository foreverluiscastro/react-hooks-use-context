import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
// import the provider
import { UserProvider } from "../context/user";
import { ThemeContext } from "../context/theme";

function App() {
  const { theme, setTheme } = useContext(ThemeContext)
  // const [theme, setTheme] = useState("dark");
  // const [user, setUser] = useState(null); 
  // We'll comment this out to move it the context UserProvider
  return (
    <main className={theme}>
      {/* wrap components that need access to context data in the provider*/}
      <UserProvider>
        <Header theme={theme} setTheme={setTheme} />
        <Profile theme={theme} />
      </UserProvider>
    </main>
  );
}

export default App;
