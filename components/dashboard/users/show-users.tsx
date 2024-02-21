"use client";
import { useUser } from "@/services/queries";
import { columnsUser } from "./columns-user";
import { DataTable } from "../../data-table";
import { Card } from "@/components/ui/card";
import {Loader} from "@/components/ui/loading";

export function ShowUsers() {
  const { data, error, isLoading } = useUser();
  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div className=" flex justify-center items-center  h-[30rem]">
        <Loader />
      </div>
    );
  const dataToUse = Array.isArray(data) ? data : [];
  return (
    <div className=" mt-6 mb-3">
      <Card className="p-4  ">
        <h2 className="text-2xl py-2 font-semibold text-gray-700 dark:text-electric-violet-50">
          User Table
        </h2>

        <DataTable columns={columnsUser} data={dataToUse} />
      </Card>
    </div>
  );
}
