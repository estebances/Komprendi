import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import useEvaluateWord from '../../hooks/useEvaluateWord';

export default function StepperResult({language, searchWord}) {
  const [activeStep, setActiveStep] = useState(0);
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  let resAPI = useEvaluateWord(searchWord, language);
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
      {resAPI && resAPI.steps && resAPI.steps.map((step, index) => (
          <Step key={resAPI && resAPI.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{resAPI && step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {resAPI && activeStep === resAPI.steps.length -1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {resAPI && resAPI.steps && resAPI.steps.length === activeStep && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Result:
            <div style={{overflowY: 'scroll', marginTop: '20px', display: 'grid', height: '250px', width: '400px', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '20px'}}>
              {resAPI.result.map((index, r) => {
                return <div key={index}>{r}</div>
              })}
            </div>
          </Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  )
}
