/*──────────────────────────────────────────────────────────────────────────────────
  INITIALIZATION
  Connect to Supabase, grab HTML elements, initialize variables, and load rows on page load
  ──────────────────────────────────────────────────────────────────────────────────*/

// create supabase database client
const db = supabase.createClient("https://insert-url-here.supabase.co", "sb_publishable_insert_url");

// grab HTML elements
let container = document.querySelector(".container");
let input = document.querySelector("input");
let saveButton = document.querySelector("button");

// initialize save button
saveButton.addEventListener("click", saveInput);
saveButton.textContent = "Create";

// store current ID if editing
let currentEditID = null;

loadRows(); // load rows on page load

/*──────────────────────────────────────────────────────────────────────────────────
  CREATE / EDIT INPUT SWITCHING FUNCTIONS
  Functions to switch between create and edit for HTML input
  ──────────────────────────────────────────────────────────────────────────────────*/

// switch between creating and editing row
function saveInput() {
  if (currentEditID === null) {
    createRow();
  } else {
    editRow(currentEditID);
    currentEditID = null;
    saveButton.textContent = "Create";
  }
  input.value = "";
}

// fill input with current row value
function fillInputWithEdit(entry) {
  input.value = entry.column_1;
  input.focus();
  currentEditID = entry.id;
  saveButton.textContent = "Save Edit";
}

/*──────────────────────────────────────────────────────────────────────────────────
  SUPABASE FUNCTIONS
  Functions for load, create, delete, and edit
  ──────────────────────────────────────────────────────────────────────────────────*/

// get all rows and create elements on the DOM for each entry
async function loadRows() {
  container.innerHTML = "";

  // supabase get all rows
  const { data, error } = await db.from("table_1").select("*");

  if (error) {
    console.error(error);
    return;
  }

  for (const entry of data) {
    let entryDiv = document.createElement("div");

    let entryDesc = document.createElement("p");
    entryDesc.textContent = entry.column_1;

    let entryEdit = document.createElement("button");
    entryEdit.textContent = "Edit";
    entryEdit.addEventListener("click", () => fillInputWithEdit(entry)); // use arrow function to add event listener with argument of current row ID

    let entryDelete = document.createElement("button");
    entryDelete.textContent = "Delete";
    entryDelete.addEventListener("click", () => deleteRow(entry.id)); // use arrow function to add event listener with argument of current row ID

    container.appendChild(entryDiv);
    entryDiv.appendChild(entryDesc);
    entryDiv.appendChild(entryEdit);
    entryDiv.appendChild(entryDelete);
  }
}

// create a new row based on the current input value
async function createRow() {
  // supabase insert new row
  const { error } = await db
    .from("table_1")
    .insert([{ column_1: input.value }])
    .select();

  if (error) {
    console.error(error);
    return;
  }

  loadRows(); // load rows after each operation to ensure DOM is up to date
}

// delete a row based on passed ID to function
async function deleteRow(id) {
  // supabase delete row by id
  const { error } = await db.from("table_1").delete().eq("id", id);

  if (error) {
    console.error(error);
    return;
  }

  loadRows(); // load rows after each operation to ensure DOM is up to date
}

// edit a row based on the current input value and ID passed to function
async function editRow(id) {
  // supabase update row by id
  const { error } = await db.from("table_1").update({ column_1: input.value }).eq("id", id).select();

  if (error) {
    console.error(error);
    return;
  }

  loadRows(); // load rows after each operation to ensure DOM is up to date
}
