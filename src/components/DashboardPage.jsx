import React from "react";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import ProductSalesChart from "./Chart";
const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="px-2 py-2 flex justify-between items-center border-2">
        <div className="flex gap-2 items-center">
          <div className="text-4xl border-2">
            <FaHome />
          </div>
          <div>
            <p className="text-sm font-medium">Dashboard One</p>
            <p>Welcome to this..</p>
          </div>
        </div>
        <div>
          <button>
            <IoBagCheckSharp />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        <div className="border-1 px-2 py-2">
          <p>orders</p>
          <div className="flex justify-between">
            <p>10%</p>
            <p>1000</p>
          </div>
          <div className="w-full bg-gray-200 h-1">
            <div className="bg-red-600 h-1 w-[10%]"></div>
          </div>
        </div>
        <div className="border-1 px-2 py-2">
          <p>orders</p>
          <div className="flex justify-between">
            <p>50%</p>
            <p>1000</p>
          </div>
          <div className="w-full bg-gray-200 h-1">
            <div className="bg-blue-600 h-1 w-[50%]"></div>
          </div>
        </div>
        <div className="border-1 px-2 py-2">
          <p>orders</p>
          <div className="flex justify-between">
            <p>20%</p>
            <p>1000</p>
          </div>
          <div className="w-full bg-gray-200 h-1">
            <div className="bg-red-600 h-1 w-[20%]"></div>
          </div>
        </div>
        <div className="border-1 px-2 py-2">
          <p>orders</p>
          <div className="flex justify-between">
            <p>70%</p>
            <p>1000</p>
          </div>
          <div className="w-full bg-gray-200 h-1">
            <div className="bg-blue-600 h-1 w-[70%]"></div>
          </div>
        </div>
        <div className="col-span-3 px-2 py-2 border-1 bg-blue-900">
          <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <div>
              <p>Product Sales</p>
            </div>
            <div className="flex gap-2">
              <p>Today</p>
              <p>Week</p>
            </div>
          </div>
          <div>
          <ProductSalesChart />
          </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="px-2 py-2 border-1">
            <p>Total visits</p>
            <div className="flex justify-between px-2">
              <div className="flex space-x-1 h-10 w-3/4 items-end">
                <div className="bg-blue-500 w-1 h-[60%]"></div>
                <div className="bg-red-500 w-1 h-[30%]"></div>
                <div className="bg-yellow-500 w-1 h-[60%]"></div>
                <div className="bg-blue-500 w-1 h-[10%]"></div>
              </div>
              <div className="flex items-center">9348</div>
            </div>
          </div>
          <div className="px-2 py-2 border-1">
            <p>Total visits</p>
            <div className="flex justify-between px-2">
              <div className="flex space-x-1 h-10 w-3/4 items-end">
                <div className="bg-blue-500 w-1 h-[60%]"></div>
                <div className="bg-red-500 w-1 h-[30%]"></div>
                <div className="bg-yellow-500 w-1 h-[60%]"></div>
                <div className="bg-blue-500 w-1 h-[10%]"></div>
              </div>
              <div className="flex items-center">9348</div>
            </div>
          </div>
          <div className="px-2 py-2 border-1">
            <p>Total visits</p>
            <div className="flex justify-between px-2">
              <div className="flex space-x-1 h-10 w-3/4 items-end">
                <div className="bg-blue-500 w-1 h-[60%]"></div>
                <div className="bg-red-500 w-1 h-[30%]"></div>
                <div className="bg-yellow-500 w-1 h-[60%]"></div>
                <div className="bg-blue-500 w-1 h-[10%]"></div>
              </div>
              <div className="flex items-center">9348</div>
            </div>
          </div>
          <div className="px-2 py-2 border-1">
            <p>Total visits</p>
            <div className="flex justify-between px-2">
              <div className="flex space-x-1 h-10 w-3/4 items-end">
                <div className="bg-blue-500 w-1 h-[60%]"></div>
                <div className="bg-red-500 w-1 h-[30%]"></div>
                <div className="bg-yellow-500 w-1 h-[60%]"></div>
                <div className="bg-blue-500 w-1 h-[10%]"></div>
              </div>
              <div className="flex items-center">9348</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
