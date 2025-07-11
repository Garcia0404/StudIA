import { create } from "zustand";
import { persist } from "zustand/middleware";

// Tipos para las variables complejas
export interface Card {
  id: string;
  question: string;
  answer: string;
  options: string[]; // <-- opciones para la pregunta
  hint: string;
  category: string;
  tags: string[];
  media: {
    image?: string;
    audio?: string;
  };
}

export interface Goal {
  name: string;
  progress: number; // 1 to 100
  target: number;
  current: number;
}

export interface RecentActivityItem {
  subject: string;
  score: number; // percentage
  time: string; // e.g., "2 hours"
}

export interface WeeklyStatistics {
  studyTime: string; // e.g., "5h 30m"
  averageImprovement: string; // e.g., "+12%"
  averageScore: number; // e.g., 85
}

export interface UserAnswer {
  questionIndex: number;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

export interface SimulacroHistory {
  userAnswers: UserAnswer[];
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  category: string | null;
  mode: string;
  date: string;
  questions: Card[];
}

interface GlobalState {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;

  cards: Card[];
  setCards: (cards: Card[]) => void;
  addCard: (card: Card) => void;
  removeCard: (index: number) => void;

  categories: string[];
  addCategory: (category: string) => void;

  goals: Goal[];
  setGoals: (goals: Goal[]) => void;
  addGoal: (goal: Goal) => void;
  updateGoal: (index: number, goal: Partial<Goal>) => void;

  todaysProgress: {
    studiedCards: number;
    completedSimulations: number;
    studyMinutes: number;
  };
  setTodaysProgress: (progress: {
    studiedCards: number;
    completedSimulations: number;
    studyMinutes: number;
  }) => void;

  streaks: {
    currentStreakDays: number;
    totalStreakDays: number;
  };
  setStreaks: (streaks: {
    currentStreakDays: number;
    totalStreakDays: number;
  }) => void;

  recentActivity: RecentActivityItem[];
  setRecentActivity: (activity: RecentActivityItem[]) => void;
  addRecentActivity: (item: RecentActivityItem) => void;

  weeklyStatistics: WeeklyStatistics;
  setWeeklyStatistics: (stats: WeeklyStatistics) => void;

  gettingStartedCompleted: boolean;
  setGettingStartedCompleted: (completed: boolean) => void;

  simulacrosHistory: SimulacroHistory[];
  addSimulacroToHistory: (sim: SimulacroHistory) => void;
  currentExam: {
    userAnswers: UserAnswer[];
    questions: Card[];
    timeSpent: number;
  };
  setCurrentExam: (data: {
    userAnswers: UserAnswer[];
    questions: Card[];
    timeSpent: number;
  }) => void;
  clearCurrentExam: () => void;
}

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set, get) => ({
      theme: "light",
      setTheme: (theme) => set({ theme }),

      cards: [],
      setCards: (cards) => set({ cards }),
      addCard: (card) => set({ cards: [...get().cards, card] }),
      removeCard: (index) =>
        set({ cards: get().cards.filter((_, i) => i !== index) }),

      categories: ["Sin categoría"],
      addCategory: (category) =>
        set({ categories: [category, ...get().categories] }),

      goals: [],
      setGoals: (goals) => set({ goals }),
      addGoal: (goal) => set({ goals: [...get().goals, goal] }),
      updateGoal: (index, goal) =>
        set({
          goals: get().goals.map((g, i) =>
            i === index ? { ...g, ...goal } : g
          ),
        }),

      todaysProgress: {
        studiedCards: 0,
        completedSimulations: 0,
        studyMinutes: 0,
      },
      setTodaysProgress: (progress) => set({ todaysProgress: progress }),

      streaks: {
        currentStreakDays: 0,
        totalStreakDays: 0,
      },
      setStreaks: (streaks) => set({ streaks }),

      recentActivity: [],
      setRecentActivity: (activity) => set({ recentActivity: activity }),
      addRecentActivity: (item) =>
        set({ recentActivity: [...get().recentActivity, item] }),

      weeklyStatistics: {
        studyTime: "0m",
        averageImprovement: "+0%",
        averageScore: 0,
      },
      setWeeklyStatistics: (stats) => set({ weeklyStatistics: stats }),

      gettingStartedCompleted: false,
      setGettingStartedCompleted: (completed) =>
        set({ gettingStartedCompleted: completed }),

      simulacrosHistory: [],
      addSimulacroToHistory: (sim) => {
        const currentHistory = get().simulacrosHistory;
        const newHistory = [sim, ...currentHistory].slice(0, 5);
        set({ simulacrosHistory: newHistory });
      },
      currentExam: {
        userAnswers: [],
        questions: [],
        timeSpent: 0,
      },
      setCurrentExam: (data) => set({ currentExam: data }),
      clearCurrentExam: () =>
        set({ currentExam: { userAnswers: [], questions: [], timeSpent: 0 } }),
    }),
    {
      name: "global-storage",
    }
  )
);
