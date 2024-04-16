import { Button } from "./components/ui/button";
import { ThemeProvider } from "./components/ui/theme/themeprovider";
import { ModeToggle } from "./components/ui/theme/toggleTheme";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle />
        <Button>knop</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
