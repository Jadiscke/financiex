import { Button, Card } from "ui";

export default function Analisys() {
  return (
    <div className="flex flex-col w-full h-full gap-10">
      <h1 className="text-3xl font-bold text-white text-center my-10">
        Analisys
      </h1>
      <div className="flex flex-none flex-col w-full justify-center items-center">

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <Card title="About Financiex Analysis" className="w-96">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis rerum saepe eum ipsa, beatae eius quis incidunt laboriosam porro similique minus, nisi sint natus laborum! Natus corporis placeat ipsa asperiores?
          </Card>

          <Card title="Download our Template" className="w-96">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis rerum saepe eum ipsa, beatae eius quis incidunt laboriosam porro similique minus, nisi sint natus laborum! Natus corporis placeat ipsa asperiores?
          </Card>

          <Card title="Visit your Profile" className="w-96">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis rerum saepe eum ipsa, beatae eius quis incidunt laboriosam porro similique minus, nisi sint natus laborum! Natus corporis placeat ipsa asperiores?
          </Card>
        </div>
       
          
        
      </div>
      <div className="flex flex-col flex-1 justify-center content-center">
        <Button>
          Upload File
        </Button>
      </div>
      
    </div>
  )
}