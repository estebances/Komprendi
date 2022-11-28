import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useAvailableLanguages from '../../hooks/useAvailableLanguages';

export default function SelectorLangs({handleSetLanguage}) {
    const [language, setLanguage] = React.useState('IT');

    const handleChange = (event) => {
        setLanguage(event.target.value);
        handleSetLanguage(event.target.value);
    };

    let resLangs = useAvailableLanguages();
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            {resLangs && 
            <>
                <InputLabel id="select-lang">Languages</InputLabel>
                <Select
                    labelId="select-lang"
                    id="select-lang"
                    value={language}
                    label="Languages"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {resLangs && resLangs.map((lang)=>{
                        return <MenuItem key={lang.name} value={lang.iso}>{lang.name}</MenuItem>
                    })}
                </Select>
            </>}
        </FormControl>
    )
};
