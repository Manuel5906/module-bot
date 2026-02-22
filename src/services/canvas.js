const BASE_URL = "https://some-random-api.com/canvas/welcome/template-1";

/**
 * Genera una imagen de bienvenida en formato Buffer o URL
 * @param {Object} options - { username, guildName, avatar, memberCount, textColor }
 */
export async function getWelcomeImage(options) {
  const { username, guildName, avatar, memberCount } = options;

  const params = new URLSearchParams({
    username: username,
    avatar: avatar,
    guildName: guildName,
    memberCount: memberCount || "1",
    textColor: "white", 
    key: "stars"
  });

  try {
    const response = await fetch(`${BASE_URL}?${params.toString()}`);
    
    if (!response.ok) throw new Error("Error al generar imagen de bienvenida");

    return {
      status: true,
      url: response.url,
      method: "GET"
    };
  } catch (error) {
    throw new Error(error.message);
  }
}