import { Grid } from './AboutGrid.styles'
import { Hobbies } from './components/Hobbies/Hobbies'
import { PCSetupImg } from './components/PCSetupImg/PCSetupImg'
import { PlayerCard } from './components/PlayerCard/PlayerCard'
import { ProjectMoon } from './components/ProjectMoon/ProjectMoon'
import { YearsOfExp } from './components/YearsOfExp/YearsOfExp'

export const AboutGrid = () => {
    return (
        <Grid>
            <PCSetupImg />
            <Hobbies />
            <YearsOfExp />
            <PlayerCard />
            <ProjectMoon />
        </Grid>
    )
    
}