const db = supabase.createClient("https://insert-url-here.supabase.co", "sb_publishable_insert_url");

async function getAll() {
  let { data, error } = await db.from("table_1").select("*");
  console.log(data);
}

async function createRow() {
  const { data, error } = await db
    .from("table_1")
    .insert([{ column_1: "new Value!" }])
    .select();
  console.log(data);
}

async function deleteRow() {
  const { error } = await db.from("table_1").delete().eq("id", "2");
  console.log(error);
}

async function editRow() {
  const { data, error } = await db
    .from("table_1")
    .update({ column_1: "brand new value" })
    .eq("column_1", "new Value!")
    .select();
  console.log(data);
}
