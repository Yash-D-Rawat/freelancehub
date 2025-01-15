import { Checkbox, Divider, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup } from '@mui/material';
import React from 'react'
import { BiCategory } from 'react-icons/bi';
import { useTheme } from '../../Context/ThemeContext';
import { SiLevelsdotfyi } from 'react-icons/si';


const commonCheckboxStyles = {
    '&.Mui-checked': {
        color: '#00cc00', // Green border when checked
    },
    '& .MuiSvgIcon-root': {
        fontSize: '1.5rem', // Smaller checkbox size
    },
    '&.MuiCheckbox-root': {
        color: 'white', // White border by default
    },
    '&.Mui-checked .MuiSvgIcon-root': {
        color: '#00cc00', // White tick when checked
    },
    '&:hover': {
        backgroundColor: 'transparent', // Remove hover effect
    },
};

const sliderStyles = {
    '& .MuiSlider-thumb': {
        color: '#00bf63', // Green thumb
    },
    '& .MuiSlider-track': {
        color: '#00bf63', // Green track
    },
    '& .MuiSlider-rail': {
        color: '#bfbfbf', // Light grey rail
    },
    '& .MuiSlider-valueLabel': {
        backgroundColor: '#00bf63', // Green value label background
    },
};

const commonLabelStyles = {
    typography: 'caption', // Smaller text size
    margin: '-4px 0' // Reduce vertical space between labels
};

const radioStyles = {
    '& .MuiSvgIcon-root': {
        color: '#ffffff', // Default white color for the radio icon
    },
    '&.Mui-checked .MuiSvgIcon-root': {
        color: '#00cc00', // Green color when the radio button is checked
    },
    '& .MuiFormControlLabel-label': {
        color: 'white', // White color for the label text
    },
};

function Freelancefilters() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`p-6 overflow-y-auto no-scrollbar hidden md:flex flex-col ${theme === 'dark' ? 'bg-[#089451]' : 'bg-black'} w-[20%] items-center h-full`}>
            <div className='text-white text-lg font-semibold'>Custom Filters</div>

            <div className='w-full p-5 flex flex-col '>
                <Divider style={{ backgroundColor: 'white', width: '100%' }} />
                <div className='rounded-xl w-full flex items-center gap-6 bg-[#1a1a1a] mb-3 mt-5 py-1 px-4'>
                    <BiCategory className='size-6 text-[#00bf63]' />
                    <p className={`text-lg font-semibold text-white`}>Skills</p>
                </div>
                <FormGroup className='text-white'>
                    {[
                        "Web Development",
                        "Design UI/UX",
                        "Writing",
                        "Marketing",
                        "Content Writing",
                        "Mobile Application"
                    ].map((label, index) => (
                        <FormControlLabel
                            key={index}
                            control={<Checkbox defaultChecked={index === 0} sx={commonCheckboxStyles} />}
                            label={label}
                            required={index !== 0}
                            sx={commonLabelStyles}
                        />
                    ))}
                </FormGroup>
            </div>

            <div className='w-full p-5 flex flex-col'>
                <Divider style={{ backgroundColor: 'white', width: '100%' }} />
                <div className='rounded-xl w-full flex items-center gap-6 bg-[#1a1a1a] mb-3 mt-5 py-1 px-4'>
                    <SiLevelsdotfyi className='size-6 text-[#00bf63]' />
                    <p className={`text-lg font-semibold text-white`}>Experience</p>
                </div>
                <FormControl>

                    <RadioGroup
                        aria-labelledby="experience-radio-buttons-group-label"
                        defaultValue="Entry-level"
                        name="radio-buttons-group"
                    >
                        {["Entry-level", "Beginner", "Intermediate", "Expert"].map((option) => (
                            <FormControlLabel
                                key={option}
                                value={option}
                                control={<Radio sx={radioStyles} />}
                                label={option}
                                sx={{
                                    margin: '-4px 0',
                                    '& .MuiFormControlLabel-label': {
                                        color: 'white', // Ensure the label text is white
                                    },
                                }}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            </div>

        </div>
    )
}

export default Freelancefilters