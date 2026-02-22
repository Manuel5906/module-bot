import axios from 'axios';

const domain = 'https://app.ytdown.to';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36';

export async function getYouTubeMP3(videoUrl) {
  const client = axios.create({
    baseURL: domain,
    headers: {
      'User-Agent': UA,
      'X-Requested-With': 'XMLHttpRequest',
      'Referer': `${domain}/es7/`,
      'Origin': domain
    },
    withCredentials: true
  });

  try {
    const init = await client.get('/es7/');
    const cookies = init.headers['set-cookie'];
    if (cookies) client.defaults.headers.common['Cookie'] = cookies[0].split(';')[0];

    await client.post('/cooldown.php', 'action=check', {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
    });

    await new Promise(r => setTimeout(r, 1200));

    const response = await client.post('/proxy.php', `url=${encodeURIComponent(videoUrl)}`, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
    });

    const audio = response.data.api.mediaItems.find(i => i.type === 'Audio' || i.mediaExtension === 'mp3');
    if (!audio) throw new Error("MP3 not found");

    let downloadLink = null;
    let finalData = null;

    while (!downloadLink) {
      const check = await client.post('/proxy.php', `url=${encodeURIComponent(audio.mediaUrl)}`, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
      });
      finalData = check.data.api;
      if (finalData.status === "completed") downloadLink = finalData.fileUrl;
      else if (finalData.status === "error") throw new Error("Failed");
      else await new Promise(r => setTimeout(r, 2000));
    }

    return { title: response.data.api.title, size: finalData.fileSize, url: downloadLink };
  } catch (e) {
    throw new Error(e.message);
  }
}