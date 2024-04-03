import React, { useContext, useState, useEffect } from 'react';
import { Box } from '@mui/system';
import fetchContext from '../context/fetch/fetchContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Result = () => {
  const context = useContext(fetchContext);
  const { result } = context;
  const [diseaseData, setDiseaseData] = useState({});
  const [medicineData, setMedicineData] = useState([]);
  const [showDiseaseContent, setShowDiseaseContent] = useState(false);
  const [showMedicineContent, setShowMedicineContent] = useState(false);
  const [userFileName, setUserFilename] = useState("")
  const addToUserHistory = async ()=>{
    console.log("disease: ", diseaseData, userFileName)
    const disease_obj = {
      disease: diseaseData._id,
      img: userFileName,
    }
    const response = await fetch('http://localhost:5001/userHistory/addToUserHistory', {
        method: "PUT",
        mode: "cors",
        headers:{
          "Content-Type": "application/json",
          "usertoken": localStorage.getItem("usertoken")
        },
        body: JSON.stringify({disease_obj})
      })

      const json = await response.json()
      console.log(json)
    }
    
    // useEffect for storing the details of corresponding user.
    useEffect(() => {
      if(diseaseData._id !== null){
        addToUserHistory()
      }
  }, [diseaseData])
  
  
  // useEffect for disease and medicine data.
  useEffect(() => {
    if (result.diseaseDetailsResponse) {
      setDiseaseData(result.diseaseDetailsResponse);
    }
    if (result.medicineDetailsResponse) {
      setMedicineData(result.medicineDetailsResponse);
    }
    if (result.imagePath) {
      setUserFilename(result.imagePath)
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
  }, [result]);

  if (result.error) {
    return (
      <p>No results found.</p>
    );
  }

  return (
    <div style={{ marginLeft: '10vw' }}>
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
  );
};

export default Result;