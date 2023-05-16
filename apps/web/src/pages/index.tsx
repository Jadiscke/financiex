import { Button } from "ui";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-col align-middle justify-center py-2 px-12 bg-emerald-500 m-0 rounded-lg bg-opacity-70">
        <h1 className="text-3xl font-bold text-gray-100">Financiex</h1>
      </div>
      <div className="flex align-middle justify-center gap-4 w-96 p-5 m-0 rounded-lg">
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </div>

    </div>
  )
}