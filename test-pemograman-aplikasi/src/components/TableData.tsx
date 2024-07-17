import { UserDataInterface } from "@/interfaces/userDataInterface";
import DeleteButton from "./DeleteButton";
import UpdateUserComponents from "./UpdateUserComponents";
import ViewComponents from "./ViewComponents";
import dateFormatter from "@/utils/dateFormatter";
import { FaSpinner } from "react-icons/fa";

export default function TableData({
  userData,
  setUserData,
  loading,
}: {
  userData: UserDataInterface[];
  setUserData: React.Dispatch<React.SetStateAction<UserDataInterface[]>>;
  loading: boolean;
}) {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto shadow-lg rounded-lg border-1 border-black">
        <table className="min-w-full bg-white ">
          <thead className="font-bold rounded-lg shadow-md bg-blue-600 text-white">
            <tr>
              <th className="py-2 w-10 px-4 border-b   text-left text-sm  ">
                No
              </th>
              <th className="py-2 px-4 w-48 border-b  text-left text-sm  ">
                Nama
              </th>
              <th className="py-2 px-4 border-b w-52 text-left text-sm  ">
                Alamat
              </th>
              <th className="py-2 px-4 border-b  text-left text-sm  ">P/W</th>
              <th className="py-2 px-4 border-b  text-left text-sm  ">
                Tanggal Lahir
              </th>
              <th className="py-2 px-4 border-b  text-left text-sm  ">
                Tanggal Input
              </th>
              <th className="py-2 px-4 border-b  text-sm  ">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={6}
                  className="py-4 px-4 border-b border-gray-200 text-center text-sm text-gray-700 font-bold"
                >
                  <div className="flex gap-2 justify-center items-center">
                    <FaSpinner className="animate-spin" />
                    Loading...
                  </div>
                </td>
              </tr>
            ) : userData.length == 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="py-4 px-4 border-b border-gray-200 text-center text-sm text-gray-700 font-bold"
                >
                  Data Kosong.
                </td>
              </tr>
            ) : (
              userData.map((data, index) => (
                <tr className="hover:bg-gray-100" key={data.id}>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                    {data.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                    {data.alamat}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                    {data.gender}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                    {dateFormatter(data.birthDate)}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                    {dateFormatter(data.createdAt)}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700 flex justify-center gap-2">
                    <ViewComponents />
                    <UpdateUserComponents />
                    <DeleteButton />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
