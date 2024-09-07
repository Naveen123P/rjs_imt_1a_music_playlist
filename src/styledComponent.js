import styled from 'styled-components'

export const Bg = styled.div`
  width: 100%;
  height: 70vh;
  background-color: #152850;
  padding: 1rem;
`
export const ImgBg = styled.div`
  width: 100%;
  height: 30vh;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  margin: 0px;
  padding: 5rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const Para = styled.p`
  font-size: ${props => props.fontSize};
  color: #ffffff;
  color: ${props => props.color};
`
export const PlaylistBg = styled.div`
  padding: 1rem 1.5rem 1rem 1.5rem;
`
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${props => props.width};
  height: ${props => props.height};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  padding: 5px 1rem 5px 1rem;
  justify-content: ${props => props.justifyContent};
`
export const Search = styled.input`
  color: #ffffff;
  background-color: transparent;
  border: none;
  outline: none;
`
export const Heading = styled.h1`
  font-size: ${props => props.fontSize};
  color: #ffffff;
  margin: 0px;
  padding: 0px;
  text-align: ${props => props.textAlign};
`
export const Un = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(70vh - 5rem);
  overflow-y: scroll;
  margin: 0px;
  padding: 0px;
`
