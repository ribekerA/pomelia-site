"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import Papa from "papaparse";
import { useRouter } from "next/navigation";
import {DashboardCard} from "../components/DashboardCard";

interface Lead {
  id: string;
  nome: string;
  whatsapp: string;
  mensagem: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchLeads() {
      const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
      if (error) {
        alert("Erro ao carregar leads");
        setLeads([]);
      } else {
        setLeads(data || []);
      }
      setLoading(false);
    }
    fetchLeads();
  }, []);

  const totalLeads = leads.length;
  const today = new Date().toISOString().slice(0, 10);
  const thisWeekStart = new Date();
  thisWeekStart.setDate(thisWeekStart.getDate() - thisWeekStart.getDay());
  const weekStr = thisWeekStart.toISOString().slice(0, 10);
  const thisMonthStart = new Date();
  thisMonthStart.setDate(1);
  const monthStr = thisMonthStart.toISOString().slice(0, 10);
  const leadsHoje = leads.filter(l => l.created_at?.slice(0, 10) === today).length;
  const leadsSemana = leads.filter(l => l.created_at?.slice(0, 10) >= weekStr).length;
  const leadsMes = leads.filter(l => l.created_at?.slice(0, 7) === today.slice(0, 7)).length;
  const leadMaisRecente = leads[0];

  // Gráfico de Leads/dia (últimos 15 dias)
  const dias = Array.from({ length: 15 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (14 - i));
    return d.toISOString().slice(0, 10);
  });

  const leadsPorDia = dias.map(day =>
    leads.filter(l => l.created_at?.slice(0, 10) === day).length
  );

  const chartData = {
    labels: dias.map(d => d.slice(5).split('-').reverse().join('/')),
    datasets: [
      {
        label: "Leads/dia",
        data: leadsPorDia,
        borderColor: "#C99E59",
        backgroundColor: "#FFF9ED",
        tension: 0.4,
        pointBackgroundColor: "#9B7B49",
        fill: true,
      }
    ]
  };

  // Exportar CSV
  const exportCSV = () => {
    const csv = Papa.unparse(leads.map(l => ({
      nome: l.nome,
      whatsapp: l.whatsapp,
      mensagem: l.mensagem,
      data: l.created_at,
    })));
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "leads.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  // Logout
  const logout = async () => {
    await fetch("/api/admin-logout", { method: "POST" });
    router.replace("/admin/login");
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Dashboard Pomélia</h2>
        <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Sair</button>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <DashboardCard title="Total de Leads" value={totalLeads} />
        <DashboardCard title="Leads hoje" value={leadsHoje} />
        <DashboardCard title="Esta semana" value={leadsSemana} />
        <DashboardCard title="Este mês" value={leadsMes} />
      </div>
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <Line data={chartData} />
      </div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold">Últimos Leads</h3>
        <button onClick={exportCSV} className="bg-yellow-700 text-white px-4 py-2 rounded hover:bg-yellow-800">Exportar CSV</button>
      </div>
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-center">
          <thead>
            <tr className="bg-yellow-100">
              <th className="py-2 px-4">Nome</th>
              <th className="py-2 px-4">WhatsApp</th>
              <th className="py-2 px-4">Mensagem</th>
              <th className="py-2 px-4">Data</th>
            </tr>
          </thead>
          <tbody>
            {leads.slice(0, 20).map((lead, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-1 px-2">{lead.nome}</td>
                <td className="py-1 px-2">{lead.whatsapp}</td>
                <td className="py-1 px-2">{lead.mensagem}</td>
                <td className="py-1 px-2">
                  {lead.created_at
                    ? new Date(lead.created_at).toLocaleString("pt-BR")
                    : ""}
                </td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan={4} className="py-4 text-gray-500">
                  Nenhum lead encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <h4 className="font-bold text-lg mb-1">Lead mais recente</h4>
        {leadMaisRecente ? (
          <div className="p-4 bg-yellow-100 rounded-xl shadow flex flex-col gap-2">
            <span><strong>Nome:</strong> {leadMaisRecente.nome}</span>
            <span><strong>WhatsApp:</strong> {leadMaisRecente.whatsapp}</span>
            <span><strong>Mensagem:</strong> {leadMaisRecente.mensagem}</span>
            <span><strong>Data:</strong> {new Date(leadMaisRecente.created_at).toLocaleString("pt-BR")}</span>
          </div>
        ) : (
          <div className="text-gray-500">Nenhum lead cadastrado ainda.</div>
        )}
      </div>
    </div>
  );
}
