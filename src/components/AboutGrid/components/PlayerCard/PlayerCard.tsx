import { GridItem } from '../../AboutGrid.styles'
import { StyledImg } from './PlayerCard.styles'

export const PlayerCard = () => {
    return (
        <GridItem gridArea='player-card'>
            <StyledImg src='https://ashanpw-asset-bucket.s3.amazonaws.com/pfp.png' />
        </GridItem>
    )
}