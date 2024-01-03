const API_URL = 'https://stump-puzzling-canvas.glitch.me/api/';

// get server's data
export const getData = async (url) => {
  try {
    const response = await fetch(`${API_URL}${url}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};
