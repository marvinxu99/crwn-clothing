import { Link } from 'react-router-dom';

import { DirectoryItemContainer, BackgroundImage, Body} from './directory-item.styles';

const DirectoryItem = ({category}) =>{
  const {title, imageUrl} = category;
  return(
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p><Link to={`shop/${title.toLowerCase()}`}>Shop Now</Link></p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;