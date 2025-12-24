import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export interface User {
  id: string;
  email: string;
  points: number;
  streak: number;
  last_claim: string | null;
  referral_code: string | null;
  created_at: string;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  points_cost: number;
  icon: string;
  is_locked: boolean;
  category: string;
  created_at: string;
}

// export function useRewards() {
//   const [user, setUser] = useState<User | null>(null);
//   const [rewards, setRewards] = useState<Reward[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const fetchAll = async () => {
//     setLoading(true);
//     setError(null);

//     const {
//       data: { user: authUser },
//       error: authError,
//     } = await supabase.auth.getUser();
//     if (authError || !authUser) {
//       setError("Not authenticated");
//       setLoading(false);
//       return;
//     }

//     // Fetch user data
//     const { data: userData, error: userError } = await supabase
//       .from("users")
//       .select("*")
//       .eq("id", authUser.id)
//       .single();

//     if (userError) {
//       setError(userError.message);
//       setLoading(false);
//       return;
//     }

//     // Fetch rewards
//     const { data: rewardsData, error: rewardsError } = await supabase
//       .from("rewards")
//       .select("*")
//       .order("created_at", { ascending: true });

//     if (rewardsError) {
//       console.warn("Failed to fetch rewards:", rewardsError);
//     }

//     setUser(userData);
//     setRewards(rewardsData || []);
//     setLoading(false);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       await fetchAll();
//     };
//     fetchData();
//   }, []);
//   const claimDaily = async () => {
//     if (!user) return;

//     const now = new Date();
//     const newPoints = user.points + 5;
//     const newStreak = user.streak + 1;

//     // Optimistic update
//     setUser({
//       ...user,
//       points: newPoints,
//       streak: newStreak,
//       last_claim: now.toISOString(),
//     });

//     // Update DB
//     const { error: updateError } = await supabase
//       .from("users")
//       .update({
//         points: newPoints,
//         streak: newStreak,
//         last_claim: now.toISOString(),
//       })
//       .eq("id", user.id);

//     // Log transaction
//     await supabase.from("transactions").insert({
//       user_id: user.id,
//       type: "earn",
//       points: 5,
//       description: "Daily check-in",
//     });

//     if (updateError) {
//       // Revert on error
//       fetchAll();
//     }
//   };

//   return {
//     user,
//     rewards,
//     loading,
//     error,
//     claimDaily,
//     refetch: fetchAll,
//   };
// }

export function useRewards() {
  const [user, setUser] = useState<User | null>(null);
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = async () => {
    setLoading(true);
    setError(null);

    const DEMO_USER_ID = "3fa85f64-5717-4562-b3fc-2c963f66afa6";

    // Fetch user (single record)
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", DEMO_USER_ID)
      .single();

    if (userError) {
      setError(userError.message);
      setLoading(false);
      return;
    }

    // Fetch rewards (array)
    const { data: rewardsData, error: rewardsError } = await supabase
      .from("rewards")
      .select("*")
      .order("created_at", { ascending: true });

    if (rewardsError) {
      console.warn("Failed to fetch rewards:", rewardsError);
    }

    setUser(userData);
    setRewards(rewardsData || []);
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchAll();
    };
    fetchData();
  }, []);

  const claimDaily = async () => {
    if (!user) return;

    const now = new Date().toISOString();
    const newPoints = user.points + 5;
    const newStreak = user.streak + 1;

    setUser({ ...user, points: newPoints, streak: newStreak, last_claim: now });

    // ✅ This updates the REAL "demo-user-123" row in your DB
    await supabase
      .from("users")
      .update({ points: newPoints, streak: newStreak, last_claim: now })
      .eq("id", user.id);

    await supabase.from("transactions").insert({
      user_id: user.id,
      type: "earn",
      points: 5,
      description: "Daily check-in",
    });
  };

  return { user, rewards, loading, error, claimDaily, refetch: fetchAll };
}
