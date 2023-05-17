import { Button, Card } from "ui";

export default function Analisys() {
  return (
    <div className="flex h-full w-full flex-col gap-10">
      <h1 className="my-10 text-center text-3xl font-bold text-white">
        Analisys
      </h1>
      <div className="flex w-full flex-none flex-col items-center justify-center">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card title="About Financiex Analysis" className="w-96">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            rerum saepe eum ipsa, beatae eius quis incidunt laboriosam porro
            similique minus, nisi sint natus laborum! Natus corporis placeat
            ipsa asperiores?
          </Card>

          <Card title="Download our Template" className="w-96">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            rerum saepe eum ipsa, beatae eius quis incidunt laboriosam porro
            similique minus, nisi sint natus laborum! Natus corporis placeat
            ipsa asperiores?
          </Card>

          <Card title="Visit your Profile" className="w-96">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            rerum saepe eum ipsa, beatae eius quis incidunt laboriosam porro
            similique minus, nisi sint natus laborum! Natus corporis placeat
            ipsa asperiores?
          </Card>
        </div>
      </div>
      <div className="flex flex-1 flex-col content-center justify-center">
        <Button>Upload File</Button>
      </div>
    </div>
  );
}
