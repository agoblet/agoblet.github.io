import { useReducer } from "react";

export default function useCounter() {
  return useReducer((count: number): number => count + 1, 0);
}
