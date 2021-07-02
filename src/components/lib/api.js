const FIREBASE_DOMAIN = "https://clone-78c4d.firebaseio.com";

export async function getAllVideos() {
  const response = await fetch(`${FIREBASE_DOMAIN}/videos.json`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch videos");
  }
  const transformedVideos = [];

  for (const key in data) {
    const videosObj = {
      id: key,
      ...data[key],
    };
    transformedVideos.push(videosObj);
  }
  return transformedVideos;
}
