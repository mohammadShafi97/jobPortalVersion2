import React from "react";
import { Link } from "react-router-dom";

import Pagination from "../Pagination";
import { rating } from "../../../utils/rating";

export default function CompanyList({ data }) {
  return (
    <section className=" mt-5 rounded-lg">
      <h4 className="form-title mb-8 text-2xl font-semibold">All Companies</h4>
      <div className="flex justify-end">
        <Pagination />
      </div>

      <div className="mt-7 mb-5">
        <table className="bg-secondary w-full text-center rounded-lg">
          <thead>
            <tr className="border-b-2 border-b-ascent">
              <th className=" tablecolumn">COMPANY</th>
              <th className=" tablecolumn">TOTAL JOBS</th>
              <th className="tablecolumn">RATING</th>
              <th className="tablecolumn">OPEN JOBS</th>
              <th className="tablecolumn"></th>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 &&
              data.map((x) => (
                <tr key={x.id}>
                  <td className=" tablecolumn">{x.company}</td>
                  <td className=" tablecolumn">{x.totalJobs}</td>
                  <td className=" tablecolumn">{rating(x.rating)}</td>
                  <td className=" tablecolumn">{x.available}</td>
                  <td className=" tablecolumn flex flex-col gap-1 justify-center items-center md:flex-row">
                    <Link
                      to={`/admin/companies/${x.id}`}
                      className="bg-ascent text-primary px-1 py-1 w-full md:w-fit mx-1 md:px-2 md:py-2 rounded hover:bg-hover text-xs md:text-md cursor-pointer"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
