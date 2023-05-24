import Button from "./button";

interface Props {
  name: string;
}

export default function ServiceCard({ name }: Props) {

  return (
    <div
      className="aspect-[9/12] p-2 w-1/4 shadow-lg bg-no-repeat bg-cover flex flex-col justify-between items-start transition-transform hover:scale-105"
      style={{ backgroundImage: 'url(/service.png)' }}>
      <h3 className="text-white text-xl font-semibold drop-shadow shadow-white">{name}</h3>
      <Button>Leer más</Button>
    </div>
  );

}