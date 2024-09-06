import {AiOutlineDelete} from 'react-icons/ai'

import {Li, DelButton} from './styledComponent'
import {FlexRow, Para} from '../../styledComponent'

const SongItem = props => {
  const {details, deleteSong} = props
  const {id, imageUrl, name, genre, duration} = details
  const onClickDelete = () => {
    deleteSong(id)
  }
  return (
    <Li>
      <FlexRow justifyContent="flex-start">
        <img src={imageUrl} alt="track" className="image" />
        <Para fontSize="0.4rem">{name}</Para>
        <Para color="#3b82f6">{genre}</Para>
      </FlexRow>
      <FlexRow width="200px">
        <Para>{duration}</Para>
        <DelButton type="button" data-testid="delete" onClick={onClickDelete}>
          <AiOutlineDelete />{' '}
        </DelButton>
      </FlexRow>
    </Li>
  )
}

export default SongItem
