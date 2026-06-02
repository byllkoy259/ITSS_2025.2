import React from "react";

export default function StatCard({ label, value, tone, icon: Icon }) {
  const tones = {
    blue: "from-blue-50 to-blue-100 text-blue-700",
    green: "from-emerald-50 to-teal-100 text-emerald-700",
    orange: "from-amber-50 to-orange-100 text-amber-800"
  };

  return (
    <article className={`rounded-2xl bg-gradient-to-br p-5 shadow-sm ring-1 ring-slate-200/70 ${tones[tone]}`}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold opacity-80">{label}</p>
          <p className="mt-2 text-3xl font-black tracking-normal">{value}</p>
        </div>
        <Icon size={42} className="opacity-35" />
      </div>
    </article>
  );
}
