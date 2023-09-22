'use client'

import { BounceLoader } from "react-spinners"
import Box from "../components/Box"

const Loading = () => {
  return (
    <Box className="h-full items-center flex justify-center">
      <BounceLoader color="#22c55e" size={40} />
    </Box>
  )
}

export default Loading
