import { useState } from "react";
import TableData from "./components/TableData";
import AddUserComponents from "./components/AddUserComponents";

function App() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-200 ">
      <section className="flex flex-col ">
        <AddUserComponents />
        <TableData />
      </section>
    </main>
  );
}

export default App;
