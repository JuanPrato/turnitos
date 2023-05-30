import Nav from "@/components/header/Nav";
import Form from "./Form";

export default function Turn() {

  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <div
        className="grow grid place-items-center bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: 'url(/herramientas.png)' }}
      >
        <Form />
      </div>
    </div>
  );

}