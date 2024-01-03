import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
const useStyles = makeStyles({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    icon: {
        marginRight: '20px',
    },
    button: {
        marginTop: '40px'
    },
    cardGrid: {
        padding: "20px 0"
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardMedia: {
        paddingTop: "56.25%",  // 16:9
        // paddingTop: "100%",
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }
})


export { theme, useStyles };