import TableData from "./components/TableData";
import AddUserComponents from "./components/AddUserComponents";
import { UserDataInterface } from "./interfaces/userDataInterface";
import { useEffect, useState } from "react";
import { getUser } from "./api/api";
import { Toaster } from "@/components/ui/toaster";

function App() {
  const [userData, setUserData] = useState<UserDataInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data: UserDataInterface[] = await getUser();
      setUserData(data);
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <>
      <main className="flex justify-center items-center min-h-screen bg-gray-200 ">
        <section className="flex flex-col ">
          <AddUserComponents setUserData={setUserData} userData={userData} />
          <TableData
            userData={userData}
            setUserData={setUserData}
            loading={loading}
          />
        </section>
      </main>
      <Toaster />
    </>
  );
}

export default App;
