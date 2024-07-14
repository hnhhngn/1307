async function getCleanupCalendar() {
  let { data, error } = await SUPABASE.from("cleans").select(
    "weekday, users!inner(name, status)"
  );
  if (error === null) {
    return data;
  }
  console.log("error", error);
  return null;
}

async function getNotes() {
  let { data, error } = await SUPABASE.from("notes")
    .select("contents")
    .eq("id", "1");
  if (error === null) {
    return data;
  }
  console.log("error", error);
  return null;
}

async function getPayment() {
  let { data, error } = await SUPABASE.from("payment").select(
    "*, users!inner(name, status)"
  );
  if (error === null) {
    return data;
  }
  console.log("error", error);
  return null;
}
