export const getBrief = async () => {
  const res = await fetch(
    'https://live.vamoos.com/api/itineraries/VMD-VL1234',
    {
      method: 'GET',
    }
  )
  const json = await res.json()

  return json
}
