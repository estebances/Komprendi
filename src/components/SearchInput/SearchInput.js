import React, { useMemo, useState } from 'react'
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const Search = styled('div')(({ theme }) => ({

}));

export default function SearchInput({handleSetResponse}) {
  let [searchWord, setSearchWord] = useState(null);
  
  const handleChange = (value) => {
    setSearchWord(value)
  }
  
  const setRes = ()=> {
    handleSetResponse(searchWord);
  }

  useMemo(()=>{
    setRes(searchWord);
  // eslint-disable-next-line
  },[searchWord])

  return (
    <div>
      <Search>
        <TextField 
          id="outlined-basic"
          size="small"
          label="Search"
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={e=>handleChange(e.target.value)}
        />
      </Search>
    </div>
  )
}
