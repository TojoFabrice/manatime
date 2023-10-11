
'use client'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react';
import fs from 'fs/promises';


const options = ['Option 1', 'Option 2'];

interface Info {
    utilisateur: string,
    categorie: string,
    periode: string,
    sa: string,
    sp: string,
    sf: string,
}

export default function AddNew() {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState<any>({
        utilisateur: '',
        categorie: '',
        periode: '',
        sa: '',
        sp: '',
        sf: '',
    });

    useEffect(() => {
        // Lire le fichier JSON lors du chargement du composant
        fs.readFile('data.json', 'utf-8')
            .then((fileData: any) => {
                setData(JSON.parse(fileData));
            })
            .catch((err: any) => {
                console.error('Erreur lors de la lecture du fichier JSON :', err);
            });
    }, []);

    const handleSaveClick = () => {
        // Ajouter le nouvel objet de données au tableau de données
        const newData = {
            ...formData,
            id: Date.now(), // Générer un ID unique (à adapter)
        };

        const updatedData: any = [...data, newData];

        // Écrire les données mises à jour dans le fichier JSON
        fs.writeFile('data.json', JSON.stringify(updatedData), 'utf-8')
            .then(() => {
                setData(updatedData);
                setFormData({
                    utilisateur: '',
                    categorie: '',
                    periode: '',
                    sa: '',
                    sp: '',
                    sf: '',
                });
            })
            .catch((err) => {
                console.error('Erreur lors de l\'écriture du fichier JSON :', err);
            });
    };

    console.log('>>>>>>>>>>>', formData);
    

    return (
        <div className='flex justify-center mt-20 bg-white w-3/4 m-auto p-7'>
            <Box
                sx={{
                    width: 1000,
                    maxWidth: '100%',
                }}
                className="space-y-3"
            >
                <Autocomplete
                    value={formData.utilisateur}
                    onChange={(_, newValue) => {
                        setFormData({ ...formData, utilisateur: newValue });
                    }}
                    inputValue={formData.utilisateur}
                    onInputChange={(_, newInputValue) => {
                        setFormData({ ...formData, utilisateur: newInputValue });
                    }}
                    id="utilisateur"
                    options={options}
                    sx={{ width: '100%' }}
                    renderInput={(params) => <TextField {...params} label="Utilisateur" />}
                />
                <TextField fullWidth label="Catégorie" id="Catégorie" />
                <TextField fullWidth label="Période" id="Période" />
                <div className='flex space-x-2'>
                    <TextField fullWidth label="Solde actuel" id="sa" />
                    <TextField fullWidth label="Solde pris" id="sp" />
                    <TextField fullWidth label="Solde futur" id="sf" />
                </div>
                <div className='flex justify-end space-x-3'>
                    <Button variant="outlined" color="error">Annuler</Button>
                    <Button variant="outlined" onClick={handleSaveClick}>Enregistrer</Button>
                </div>
            </Box>
        </div>

    )
}
