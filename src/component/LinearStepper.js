import * as React from 'react';


import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {useForm, FormProvider,useFormContext,Controller} from "react-hook-form"
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, Typography , Container, Paper,TextField,Switch} from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import GradingIcon from '@mui/icons-material/Grading';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShieldIcon from '@mui/icons-material/Shield';
import ShareIcon from '@mui/icons-material/Share';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import WbAutoIcon from '@mui/icons-material/WbAuto';



const steps = [
    { label: 'Compaign info', icon: <GradingIcon /> },
    { label: 'Money Pages', icon: <AttachMoneyIcon /> },
    { label: 'Safe Page', icon: <ShieldIcon /> },
    { label: 'Conditions', icon: <ShareIcon /> },
    { label: 'Compaign Filters', icon: <FilterAltIcon /> },
    { label: 'Automate', icon: <WbAutoIcon /> }
  ];



  const CampaignInfo = () => {
    const {control, formState: { errors }} = useFormContext();
  
    return (
    <>
       <Controller
        control={control}
        name="candidateName"
        rules={{ required: "Candidate Name is required" }}
        render={({ field }) => (
          <TextField
            id="Candidate-name"
            label="Candidate Name"
            variant="outlined"
            placeholder="Enter your Candidate Name"
            fullWidth
            margin="normal"
            error={!!errors.candidateName}
            helperText={errors.candidateName?.message}
            {...field}
          />
        )}
      />
      <Controller
    control = {control}
    name='comment'   
     render={({field})=>(
     <TextField 
      id="comment" 
      label="COMMENT"
       variant="outlined"
       {...field}
        />
    )}
    />
      &nbsp;&nbsp;&nbsp;
      <Controller
    control = {control}
    name='epc'   
     render={({field})=>(
    <TextField 
      id="epc"
       label="EPC" 
      variant="outlined"
      {...field}
      
        />
    )}
    />

      &nbsp;&nbsp;&nbsp;
      <Controller
    control = {control}
    name='cpc'   
     render={({field})=>(
      <TextField 
      id="cpc" 
      label="CPC"
       variant="outlined"
       {...field}
      />
      )}
      />
        &nbsp;&nbsp;&nbsp;
        <br></br>
        <br></br>
        <Controller
      control = {control}
      name='trafficSource'   
       render={({field})=>(
        <TextField 
        id="traffisource" 
        label="TRAFFIC SOURCE"
         variant="outlined"
         {...field}
        />
       
        
          
      )}
      /><hr/>
    </>
    );
    }
  
  const MoneyPages = () => {
        const {control} = useFormContext()
        return (
          <div>
              <Typography >Where do we send legit visitors(money pages)?</Typography><br></br>
              <Typography >
    
              <Controller
        control = {control}
        name='Description'   
         render={({field})=>(
          <TextField id='des' 
          required
           label=" ENTER DESCRIPTION" 
           variant="outlined" 
           {...field}/> 
          
         )}/>&nbsp;&nbsp;&nbsp;
    
    
    <Controller
        control = {control}
        name='Money'   
         render={({field})=>(
          <TextField id='money'
                 required
                 label="MONEY PAGE" 
                 variant="outlined" 
                 {...field}
                 />
          
                 )}/>

                 &nbsp;&nbsp;&nbsp;
     
                 <Controller
         control = {control}
         name='Weight'   
          render={({field})=>(
           <TextField id='weight'
           required 
           label="WEIGHT"
            variant="outlined"
            {...field} />
           
          )}/>
        </Typography><br/><br/><hr/>
        <Typography variant='h6'>Dynamic Variables</Typography><br/>
        <Typography >Define your dynamic variables. You can pass them Money Pages using [[variable name]] placeholder.</Typography><br/>

        <Controller
    control = {control}
    name='Variable'   
     render={({field})=>(
      <TextField id='var'
       label="Variable"
        variant="outlined"
        {...field}  />
      
     )}/>
      <Controller
    control = {control}
    name='DefaultValue'   
     render={({field})=>(
      <TextField id='default'
       label="Default Value"
        variant="outlined"
        {...field}  />
        )}/><hr/>
  
        </div>
       )
     }
   
     const SafePages = () => {
       const {control} = useFormContext()
   
       return (
         <div>
           <Typography>
           Where do we send human reviewers,bots,crawlers and spy tools(safe pages)?
   
           </Typography> <br/>
           <Controller
       control = {control}
       name='safePage'   
        render={({field})=>(
         <TextField id='safe'
         required
           label="SAFE PAGE"
           variant="outlined"
           {...field}  /> 
           )}/><br/><hr/>
           <Typography variant='h6'>Dynamic variables</Typography>
           <Typography>Define your dynamic variable. You can pass them to your Safe
            pages using [[variable name]] placeholder.
           </Typography>
           <Button variant='contained'>Add Variable</Button><hr/>
            </div>
          )
        }
        const Conditions = () => {
            const {control} = useFormContext()
        
            const [allowSelected, setAllowSelected] = useState(true);
            const [blockSelected, setBlockSelected] = useState(false);
          
            const handleAllowChange = () => {
              setAllowSelected(true);
              setBlockSelected(false);
            };
          
            const handleBlockChange = () => {
              setBlockSelected(true);
              setAllowSelected(false);
            };
             return (
              
               <>
               <Container component={Box} p={4}> 
               <Typography variant='h6'>Country </Typography>
                <Typography>
               
                </Typography>
               
                <FormGroup>
      <FormControlLabel 
            control={<Switch  
      checked={allowSelected}
       onChange={handleAllowChange}/>} 
       label="Allow" 
       
       />
      <FormControlLabel control={<Switch checked={blockSelected} onChange={handleBlockChange} />} label="Block" />

    </FormGroup>
        </Container><hr/>


        <Controller
        control ={control}
        name='country'
        render ={({field})=>(
          <TextField 
          variant='outlined'
           id='country'
           label='SELECT COUNTRY'
           {...field} />

           )}
           />
   <hr/>
           
         </>
       )
     }
     const CompaignFilters = () => {
        const {control} = useFormContext()
    
        function not(a, b) {
          return a.filter((value) => b.indexOf(value) === -1);
        }
        
        function intersection(a, b) {
          return a.filter((value) => b.indexOf(value) !== -1);
        }
        
       
          const [checked, setChecked] = React.useState([]);
          const [left, setLeft] = React.useState([0, 1, 2, 3]);
          const [right, setRight] = React.useState([4, 5, 6, 7]);
        
          const leftChecked = intersection(checked, left);
          const rightChecked = intersection(checked, right);
        
          const handleToggle = (value) => () => {
            const currentIndex = checked.indexOf(value);
            const newChecked = [...checked];
        
            if (currentIndex === -1) {
              newChecked.push(value);
            } else {
              newChecked.splice(currentIndex, 1);
            }
        
            setChecked(newChecked);
          };
        
          const handleAllRight = () => {
            setRight(right.concat(left));
            setLeft([]);
          };
        
          const handleCheckedRight = () => {
            setRight(right.concat(leftChecked));
            setLeft(not(left, leftChecked));
            setChecked(not(checked, leftChecked));
          };
      
          const handleCheckedLeft = () => {
            setLeft(left.concat(rightChecked));
            setRight(not(right, rightChecked));
            setChecked(not(checked, rightChecked));
          };
        
          const handleAllLeft = () => {
            setLeft(left.concat(right));
            setRight([]);
          };
        
          const customList = (items) => (
            <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
              <List dense component="div" role="list">
                {items.map((value) => {
                  const labelId = 'transfer-list-item-${value}-label';
        
                  return (
                    <ListItem
                      key={value}
                      role="listitem"
                      button
                      onClick={handleToggle(value)}
                    >
                      <ListItemIcon>
                        <Checkbox
                          checked={checked.indexOf(value) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={'List item ${value + 1}'} />
                    </ListItem>
               );
            })}
          </List>
        </Paper>
      );
    return (
      <div>
       
         <Grid container spacing={2} justifyContent="center" alignItems="center">
      
     <Typography variant='h6'>Available Filters
      <Grid item>{customList(left)}</Grid>
      </Typography>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          <Button
   sx={{ my: 0.5 }}
   variant="outlined"
   size="small"
   onClick={handleAllLeft}
   disabled={right.length === 0}
   aria-label="move all left"
 >
   ≪
 </Button>
</Grid>
</Grid>&nbsp;&nbsp;&nbsp;
<Typography variant='h6'> Enabled Filters
<Grid item>{customList(right)}</Grid>
</Typography>
</Grid> <br/><br/>
</div>
)
}


const Automate = () => {
  const { control } = useFormContext();

  return (
    <div>
      

      <FormGroup>
      <FormControlLabel
          control={<Switch />} // Toggle button for feature 1
          label="Activate after X number of unique real visitors"
        />

        <FormControlLabel
          control={<Switch />} // Toggle button for feature 1
          label="Frequency Cap"
        />
        <FormControlLabel
          control={<Switch />} // Toggle button for feature 2
          label="Zero Redirect Cloaking"
        />
        <FormControlLabel
          control={<Switch />} // Toggle button for feature 3
          label="GCLID"
        />
        <FormControlLabel
          control={<Switch />} // Toggle button for feature 4
          label="IP Cap"
        />
        <FormControlLabel
          control={<Switch />} // Toggle button for feature 5
          label="Page Guard"
        />
      </FormGroup>
    </div>
  );         
};         


function getStepContent(step){
 
  switch(step){
    case 0:return(
      <>
      <CampaignInfo/>
    
      </>
    )
    case 1:return(
      <>
      <MoneyPages/>
      </>
    )
    case 2:return(
      <>
      <SafePages/>
      </>
    )
    case 3:return(
        <>
        <Conditions/>
        </>
      )
      case 4:return(
        <>
        <CompaignFilters/>
        </>
      )
      case 5:return(
        <>
        <Automate/>
        </>
      )
      case 6:return(
        <>
        </>
      )
  
      default: return "unknown step"
    }
    
  }
  export default function LinearStepper() {

    const [activeStep,setActiveStep] = useState(0);
    const methods = useForm();
    
    const handleNext=()=>{
      setActiveStep(activeStep + 1)
    }
    
    const handlePrevious=()=>{
      setActiveStep(activeStep - 1)
    }
    
    const onSubmit = (data) =>{
      console.log(data)
    };
      return (
        <div>
        <Box sx={{ width: '100%' }}>
          
          {
            activeStep === 7 ? (
              <Typography variant='h3' align='center'>
              All Changes saved
              </Typography>
            ):
            (
            <>
            
            <Paper component={Box} p={3}>
    
            <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((step, index) => (
          <Step key={index}>
           <StepLabel
            StepIconComponent={()=> (
            <CustomStepIcon icon={step.icon} active={activeStep===index} completed={activeStep>index}/>
            )}>
              {step.label}
              </StepLabel>
          </Step>
        ))}
        
      </Stepper>
      </Paper>
     
      <Container component={Box} p={4}>
        <FormProvider {...methods}>
        <form  
        onSubmit={methods.handleSubmit(onSubmit)}>
        { getStepContent(activeStep)}
        <Button 
         
         variant='contained'
         onClick={handlePrevious} 
         disabled={activeStep === 0}>
          Previous</Button>
   
          &nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='contained' 
        onClick={handleNext}
        type='submit'>
        {activeStep === 6 ? "Save Changes" : "Next"}
        </Button>
         
       </form>
         </FormProvider>
      
       </Container>
     
       </>)
        }
         
     
    </Box>
    </div>
  );
}

const CustomStepIcon = ({ active, completed, icon }) => {
 return (
   <div style={{ color: active ? 'red' : completed ? 'green' : 'gray' }}>
     {React.cloneElement(icon, { style: { fontSize: 30 } })}
   </div>
  );
};