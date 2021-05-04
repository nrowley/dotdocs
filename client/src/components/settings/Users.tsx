import React from "react";
import Gravatar from "react-gravatar";
import SettingSectionCard from "../ui/SettingSectionCard";

interface UsersProps {}

const Users: React.FC<UsersProps> = () => {
  const createNewGroup = () => {
    console.log("im clicked");
  };
  const createNewUser = () => {
    console.log("im clicked");
  };

  return (
    <SettingSectionCard>
      <div className="flex flex-col w-full">
        <div className="space-y-5">
          <h1 className="text-gray-700 mb-10 text-2xl font-medium tracking-wide text-left">
            Users & Groups
          </h1>
          <div className="flex justify-between w-100">
            <h1 className="text-gray-600 text-xl text-left tracking-wide font-medium">Groups</h1>
            <button
              type="submit"
              onClick={() => createNewGroup()}
              className="self-end cursor-pointer py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create New Group
            </button>
          </div>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-100 ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>

                  <th
                    scope="col"
                    className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Permissions
                  </th>
                  <th
                    scope="col"
                    className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>
              <tbody className="bg-gray-50 divide-y  divide-gray-200 py-5 text-left ">
                <tr className="">
                  <td className="px-6 py-4 text-sm  text-gray-900">Admin</td>
                  <td className="px-6 py-2 whitespace-pre-line ">
                    <span className="px-2 mr-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Yes
                    </span>
                  </td>
                  <td className="text-sm cursor-pointer text-blue-500 font-medium text-right px-8 py-2 ">
                    Edit
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-between w-100 mt-10">
            <h1 className="text-gray-600 text-xl tracking-wide text-left font-medium mt-10">
              Users
            </h1>
            <button
              type="submit"
              onClick={() => createNewUser()}
              className="self-end cursor-pointer py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create New User
            </button>
          </div>

          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-100 ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Username
                  </th>

                  <th
                    scope="col"
                    className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Groups
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>
              <tbody className="bg-gray-50 divide-y  divide-gray-200 py-5 text-left ">
                <tr className="">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <Gravatar email="nelsonrowley02@gmail.com" className="rounded-full" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">nrowley</div>
                        <div className="text-sm text-gray-500">nelsonrowley02@gmail.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm  text-gray-900">Admin</td>
                  <td className="px-6 py-2 whitespace-pre-line ">
                    <span className="px-2 mr-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Yes
                    </span>
                    <span className="px-2 mr-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Yes
                    </span>
                    <span className="px-2 mr-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Yes
                    </span>
                    <span className="px-2 mr-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Yes
                    </span>
                    <span className="px-2 mr-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Yes
                    </span>
                    <span className="px-2 mr-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Yes
                    </span>
                  </td>
                  <td className="text-sm cursor-pointer text-blue-500 font-medium  text-right px-8 py-2">
                    Edit
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SettingSectionCard>
  );
};

export default Users;
