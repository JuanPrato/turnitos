import Nav from "@/components/header/Nav";
import Form from "./Form";

export default function Turn() {

  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <div
        className="absolute top-0 left-0 h-screen w-screen bg-no-repeat bg-cover -z-10 blur"
        style={{ backgroundImage: 'url(/herramientas.png)' }}></div>
      <div
        className="grow grid place-items-center"
      >
        <Form />
      </div>
    </div>
  );

}