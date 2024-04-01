import React, { useContext } from 'react'
import { Box } from '@mui/system'
import fetchContext from '../context/fetch/fetchContext'

const Result = () => {
  const context = useContext(fetchContext)
  const { result } = context

  if (result.error) {
    return (
      <p>No results found.</p>
    )
  }

  const { diseaseDetailsResponse } = result;

  return (
    <div>
      <Box sx={{
        padding: '100px 0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {diseaseDetailsResponse && (
          <>
            <p>{diseaseDetailsResponse.name}</p>
            <p>{diseaseDetailsResponse.description}</p>
          </>
        )}
      </Box>
    </div>
  )
}

export default Result