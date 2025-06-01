async function publishToMataroa(title, content) {
  const blogUrl = localStorage.getItem("mataroa_url");
  const token = localStorage.getItem("mataroa_token");

  if (!blogUrl || !token) {
    alert("Configure a URL do blog e o Token no topo da página.");
    return;
  }

  const response = await fetch(`${blogUrl}/api/posts/`, {
    method: "POST",
    headers: {
      "Authorization": `Token ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, content })
  });

  const data = await response.json();

  if (response.ok) {
    alert(`Post publicado! ${data.url}`);
  } else {
    alert("Erro: " + JSON.stringify(data));
  }
}

async function updateMataroaPost(title, content) {
  const blogUrl = localStorage.getItem("mataroa_url");
  const token = localStorage.getItem("mataroa_token");

  const slug = title.toLowerCase().replace(/\s+/g, '-');

  const response = await fetch(`${blogUrl}/api/posts/${slug}/`, {
    method: "PUT",
    headers: {
      "Authorization": `Token ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, content })
  });

  const data = await response.json();

  if (response.ok) {
    alert(`Post atualizado! ${data.url}`);
  } else {
    alert("Erro: " + JSON.stringify(data));
  }
}
