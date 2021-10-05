import React from 'react'
import {useStore} from '../Store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faCertificate, faAnchor, faBiohazard, faBasketballBall, faFish, faDragon, faFrog, faGlassMartini, faChessKnight, faSocks, faHeadphones, faYenSign, faClock, faGrin, faSurprise, faHatWizard, faSnowflake } from '@fortawesome/free-solid-svg-icons'

export default function GridItem({item, handleSelection}) {
    library.add(faCoffee, faCertificate, faAnchor, faBiohazard, faBasketballBall, faFish, faDragon, faFrog, faGlassMartini, faChessKnight, faSocks, faHeadphones, faYenSign, faClock, faGrin, faSurprise, faHatWizard, faSnowflake)
    const {mode} = useStore();

    return (
        <div className="grid-item">
            {mode === 'numbers' && <button onClick={(e) => handleSelection(e)} data-id={item.number}>{item.number}</button>}
            {mode === 'icons' && <button onClick={(e) => handleSelection(e)} data-id={item.number}><FontAwesomeIcon icon={`${item.picture}`} /></button>}
        </div>
    )
}
