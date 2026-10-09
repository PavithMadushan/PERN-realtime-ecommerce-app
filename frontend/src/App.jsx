import {
  Show,
  SignInButton,
  SignUpButton,
  useAuth,
  UserButton,
} from "@clerk/react";
import PageLoader from "./components/PageLoader";

function App() {
  const { isLoaded } = useAuth();

  if (!isLoaded) {
    return <PageLoader />;
  }

  return (
    <>
      <header>
        <Show when="signed-out">
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>

      <p className="text-red-500">hello world</p>
      <button className="btn btn-primary">Click me</button>
      <button className="btn btn-secondary">Click me</button>
      <button className="btn btn-out-line">Click me</button>
    </>
  );
}

export default App;
