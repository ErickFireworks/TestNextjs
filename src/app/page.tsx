import { LoginForm } from "../components/login/LoginForm";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <div className="w-full sm:w-1/3">
        <h1 className="font-semibold text-6xl/[80%] text-center pb-10">
          Bienvenido
        </h1>
        <LoginForm />
      </div>
    </main>
  );
}
