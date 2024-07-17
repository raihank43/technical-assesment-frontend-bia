import DeleteButton from "./DeleteButton";
import UpdateUserComponents from "./UpdateUserComponents";
import ViewComponents from "./ViewComponents";

export default function TableData() {
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
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                1
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                Raihan
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                Data 3
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                Data 3
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                Data 3
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                Data 3
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700 flex justify-center gap-2">
                <ViewComponents />
                <UpdateUserComponents />
                <DeleteButton />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
