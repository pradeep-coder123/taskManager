
import { useState, useEffect, useCallback } from "react";
import { getTasks } from "../services";

const useTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshTasks = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getTasks();
      setTasks(response);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshTasks();
  }, [refreshTasks]);

  return {
    tasks,
    loading,
    refreshTasks,
  };
};

export default useTask;
