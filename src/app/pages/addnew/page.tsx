
'use client'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { Fragment, useRef } from "react";
// import fs from 'fs/promises';


const options = ['Option 1', 'Option 2'];

interface Info {
    utilisateur: string,
    categorie: string,
    periode: string,
    sa: string,
    sp: string,
    sf: string,
}


const addData = async ({
    utilisateur,
    categorie,
    periode,
    sa,
    sp,
    sf
  }: {
    utilisateur: string | null;
    categorie: string;
    periode: string;
    sa: string;
    sp: string;
    sf: string
  }) => {
    const res = fetch("http://localhost:3000/api/manatime", {
      method: "POST",
      body: JSON.stringify({ utilisateur, categorie, periode, sa, sp, sf }),
      //@ts-ignore
      "Content-Type": "application/json",
    });
    return (await res).json();
  };

  
export default function AddNew() {
    const options = ['Option 1', 'Option 2'];

    const [value, setValue] = useState<string | null>(options[0]);
    const [inputValue, setInputValue] = useState('');

    const router = useRouter();
    const userRef = useRef<HTMLInputElement | null>(null);
    const categoryRef = useRef<HTMLInputElement | null>(null);
    const periodeRef = useRef<HTMLInputElement | null>(null);
    const saRef = useRef<HTMLInputElement | null>(null);
    const spRef = useRef<HTMLInputElement | null>(null);
    const sfRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (value && categoryRef.current && periodeRef.current && saRef.current && spRef.current && sfRef.current) {
        //   toast.loading("Sending Request 🚀", { id: "1" });
          await addData({
            utilisateur: value ,
            categorie: categoryRef.current?.value,
            periode: periodeRef.current?.value,
            sa: saRef.current?.value,
            sp: spRef.current?.value,
            sf: sfRef.current?.value,
          });
        //   toast.success("Blog Posted Successfully", { id: "1" });
          router.push("/pages/home");
        }
        console.log(value + " " +categoryRef.current?.value);
        
      };
    

    return (
        <div className='flex justify-center mt-20 bg-white w-3/4 m-auto p-7'>
            <Box
                sx={{
                    width: 1000,
                    maxWidth: '100%',
                }}
                
            >
                <form onSubmit={handleSubmit} className="space-y-3">

                    <Autocomplete
                        value={value}
                        onChange={(event: any, newValue: string | null) => {
                            setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        id="Utilisateur"
                        options={options}
                        sx={{ width: "100%" }}
                        renderInput={(params) => <TextField {...params} label="Utilisateur" />}
                    />

                    <TextField 
                        inputRef={categoryRef}
                        fullWidth 
                        label="Catégorie" 
                        id="catégorie" 
                        
                    />
                    <TextField fullWidth inputRef={periodeRef} label="Période" id="Période" />
                    <div className='flex space-x-2'>
                        <TextField fullWidth inputRef={saRef} label="Soldeactuel" id="sa" />
                        <TextField fullWidth inputRef={spRef} label="Soldepris" id="sp" />
                        <TextField fullWidth inputRef={sfRef} label="Soldefutur" id="sf" />
                    </div>
                    <div className='flex justify-end space-x-3'>
                        <Button variant="outlined" color="error">Annuler</Button>
                        <Button type="submit" variant="outlined">Enregistrer</Button>
                    </div>
                </form>
            </Box>
        </div>

    )
}
