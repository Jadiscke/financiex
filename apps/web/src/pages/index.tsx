import { Button } from "ui";

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="m-0 flex flex-col justify-center rounded-lg bg-emerald-500 bg-opacity-70 px-12 py-2 align-middle">
        <h1 className="text-3xl font-bold text-gray-100">Financiex</h1>
      </div>
      <div className="m-0 flex w-96 justify-center gap-4 rounded-lg p-5 align-middle">
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}
