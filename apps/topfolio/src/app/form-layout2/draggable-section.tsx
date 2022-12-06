import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export interface DraggableSectionProps {
    title: string,
    descr: string
}

export default function DraggableSection(props: DraggableSectionProps) {
    const theme = useTheme();
    const img = {
        'Work Experience': '../assets/projects.png',
        'Projects': '../assets/work.png',
        'About me': '../assets/contacts.png',
        'Skills': '../assets/skills.png',
    }
    const descr = {
        'Work Experience': 'List all your work experiences in a timeline',
        'Projects': 'Showcase your projects with images and links to your repos or websites',
        'About me': 'Present yourself: bio, picture, contact links',
        'Skills': 'List all your skills and highlight the strongest ones',
    }
    return (
        <Card sx={{ display: 'flex', width: '100%', maxWidth: '75%', alignItems: 'center' }}>
            <CardMedia
                component="img"
                sx={{ height: 60, width: 60, marginLeft: '10px' }}
                image={img[props.title as keyof typeof img]}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: ' 0 auto' }}>
                    <Typography component="div" variant="h4">
                        {props.title}
                    </Typography>
                    <Typography variant="h5" color="text.secondary" component="div">
                        {descr[props.title as keyof typeof descr]}
                    </Typography>
                </CardContent>
            </Box>

        </Card>
    );
}