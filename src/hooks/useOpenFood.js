import { useState } from 'react'

export const useOpenFood = () => {
  const [openFood, setOpenFood] = useState(null)
  return {
    openFood,
    setOpenFood
  }
}
