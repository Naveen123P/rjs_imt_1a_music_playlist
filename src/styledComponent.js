import styled from 'styled-components'

export const Bg = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #152850;
`
export const ImgBg = styled.div`
  height: 25%;
  width: 100vw;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
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
  border: ${props => props.border};
  padding: 5px 1rem 5px 1rem;
  justify-content: ${props => props.justifyContent};
`
export const Search = styled.input`
  color: #ffffff;
`
export const Heading = styled.h1`
  font-size: ${props => props.fontSize};
  color: #ffffff;
`
export const Un = styled.ul`
  display: flex;
  flex-direction: column;
  height: 70%;
  align-items: center;
  overflow-y: scroll;
`
