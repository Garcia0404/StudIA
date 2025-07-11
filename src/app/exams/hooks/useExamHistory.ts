import { useGlobalStore } from "@/store/globalStore";
import { useTimeUtils } from "./useTimeUtils";

export const useExamHistory = () => {
  const simulacrosHistory = useGlobalStore(state => state.simulacrosHistory);
  const { formatTime } = useTimeUtils();

  const formatDate = (iso: string) => {
    const date = new Date(iso);
    return date.toLocaleString();
  };

  const getLatestSimulacros = (limit: number = 5) => {
    return simulacrosHistory.slice(0, limit);
  };

  const hasHistory = simulacrosHistory.length > 0;

  return {
    simulacrosHistory,
    formatTime,
    formatDate,
    getLatestSimulacros,
    hasHistory,
  };
}; 