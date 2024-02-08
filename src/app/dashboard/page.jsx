import React from "react";
import Card from "../ui/dashboard/card/card";
import RightBar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import Charts from "../ui/dashboard/chart/chart";

export default function Dashboard() {
  return (
    <section className="flex gap-[20px]  mt-5 ">
      <article className="flex-[3] flex flex-col gap-[20px]">
        <div className="flex gap-[20px] justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Charts />
      </article>
      <article className="flex-1">
        <RightBar />
      </article>
    </section>
  );
}
