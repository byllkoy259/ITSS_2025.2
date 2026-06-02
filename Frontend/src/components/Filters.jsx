import { Filter, Search } from "lucide-react";
import React from "react";
import { allSkills, goals, statuses } from "../constants/studymates.js";

export default function Filters({ filters, setFilters }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-600">
        <Filter size={16} />
        Bo loc
      </div>
      <div className="grid gap-3">
        <label className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 shadow-sm">
          <Search size={17} className="text-slate-400" />
          <input value={filters.query} onChange={(event) => setFilters({ ...filters, query: event.target.value })} className="w-full text-sm outline-none" placeholder="Ten hoac MSSV..." />
        </label>
        <div className="grid gap-3 sm:grid-cols-3">
          <select value={filters.skill} onChange={(event) => setFilters({ ...filters, skill: event.target.value })} className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm shadow-sm outline-none">
            {allSkills.map((skill) => <option key={skill}>{skill}</option>)}
          </select>
          <select value={filters.goal} onChange={(event) => setFilters({ ...filters, goal: event.target.value })} className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm shadow-sm outline-none">
            {goals.map((goal) => <option key={goal}>{goal}</option>)}
          </select>
          <select value={filters.status} onChange={(event) => setFilters({ ...filters, status: event.target.value })} className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm shadow-sm outline-none">
            {statuses.map((status) => <option key={status} value={status}>{status === "LOOKING" ? "Dang tim nhom" : status === "IN_TEAM" ? "Da co nhom" : status}</option>)}
          </select>
        </div>
      </div>
    </section>
  );
}
