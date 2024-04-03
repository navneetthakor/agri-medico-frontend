import React, { useContext, useState, useEffect } from 'react';
import { Box } from '@mui/system';
import fetchContext from '../context/fetch/fetchContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const HistoryResult = () => {
    const context = useContext(fetchContext)
    const { historyData } = context
    const [result, setResult] = useState({})
    const [diseaseData, setDiseaseData] = useState({});
    const [medicineData, setMedicineData] = useState([]);
    const [showDiseaseContent, setShowDiseaseContent] = useState(false);
    const [showMedicineContent, setShowMedicineContent] = useState(false);
    const [userFileName, setUserFilename] = useState("")

    const fetchDiseaseDetails = async () => {
        const response = await fetch('http://localhost:5001/disease/getdiseasebyid', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: historyData.disease })
        })
        const json = await response.json()
        setResult(json)
        console.log("fetched details are : ", json)
    }

    useEffect(() => {
        fetchDiseaseDetails()
    }, [historyData])

    useEffect(() => {
        if (result.disease) {
            setDiseaseData(result.disease);
        }
        if (result.medicines) {
            setMedicineData(result.medicines);
        }
        if (result.imagePath) {
            setUserFilename(historyData.img)
        }

        const timeout1 = setTimeout(() => {
            setShowDiseaseContent(true);
        }, 1000);

        const timeout2 = setTimeout(() => {
            setShowMedicineContent(true);
        }, 1500);

        // Clear the timeout to avoid memory leaks
        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
    }, [historyData]);

    if (result.error) {
        return (
            <p>No results found.</p>
        );
    }


    return (
        <>

            <div style={{ marginLeft: '10vw' }}>
                <h2>Search Date: {historyData.search_date.substring(0, 10)} and Time: {historyData.search_date.substring(11, 19)}</h2>
                {showDiseaseContent && (
                    <>
                        {Object.keys(diseaseData).length > 0 && (
                            <div>
                                <h1><u>Disease:</u></h1>
                                <Card sx={{
                                    maxWidth: 345,
                                    marginTop: '4vh',
                                }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="img.jpg"
                                            alt="disease"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {diseaseData.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {diseaseData.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        )}

                        {showMedicineContent && medicineData.length > 0 && (
                            <div>
                                <h1><u>Medicines:</u></h1>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}>
                                    {medicineData.map((medicine, index) => (
                                        <Card key={index} sx={{ maxWidth: 345, marginRight: '4vw' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image="img.jpg"
                                                    alt="medicine"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {medicine.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {medicine.description}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    ))}
                                </Box>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    )
}

export default HistoryResult