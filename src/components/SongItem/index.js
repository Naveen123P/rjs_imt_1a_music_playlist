import {AiOutlineDelete} from 'react-icons/ai'

import {Li, Img, DelButton} from './styledComponent'
import {FlexRow, Para, Heading} from '../../styledComponent'

const SongItem = props => {
  const {details, deleteSong} = props
  const {id, imageUrl, name, genre, duration} = details
  const onClickDelete = () => {
    deleteSong(id)
  }
  return (
    <Li>
      <FlexRow justifyContent="flex-start">
        <Img src={imageUrl} alt="track" className="image" />
        <div>
          <Para fontSize="0.9rem">{name}</Para>
          <Para color="#3b82f6">{genre}</Para>
        </div>
      </FlexRow>
      <FlexRow width="120px">
        <Para>{duration}</Para>
        <DelButton type="button" data-testid="delete" onClick={onClickDelete}>
          <AiOutlineDelete />{' '}
        </DelButton>
      </FlexRow>
    </Li>
  )
}

export default SongItem
