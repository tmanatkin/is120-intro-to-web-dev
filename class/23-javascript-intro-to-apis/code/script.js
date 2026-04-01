async function get() {
  let response = await fetch("https://www.dnd5eapi.co/api/2014/monsters/owlbear");
  let data = await response.json();
  console.log(data);
}

get();
