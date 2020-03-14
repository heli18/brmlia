import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Mesh } from '../imagecanvas/Mesh';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './ImageCanvas.css';


export const ImageCanvas = ({ brightness, contrast, image }) => {
    const styles = useStyles();
    return
    (<Grid container={true}>
        <Canvas className={styles.canvas}>
            <Mesh brightness = {brightness} contrast={contrast} image ={image} />
        </Canvas>
    </Grid>)
};
export { ImageCanvas } from './ImageCanvas';