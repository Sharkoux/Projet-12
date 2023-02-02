import styled from "styled-components"
import PropTypes from 'prop-types'


// Rules css (styled-component)
const TagContainer = styled.div`
    width: 100%;
    background-color: #FBFBFB;
    display: flex;
    margin-bottom: 30px;
    align-items: center;
    overflow: hidden;
    word-break: break-word;
    .ImgTag {
        height: 60px;
        margin: 32px;
    }
    .TagValue {
        font-size: 20px;
        font-weight: bold;
    }
    .TagData {
        font-size: 14px;
    }
`


/**
 * Generate Tags component with user data
 * @param { Object } 
 * @return { ReactDOM }
 */

function Tag({ keydata }) {


    // Return Tag component
    return (
        <TagContainer >
            <img className="ImgTag" src={Object.values(keydata.icon)[0]} />
            <div>
                <p className="TagValue">{keydata.key === 'calorieCount' ? new Intl.NumberFormat('en-IN', { style: 'decimal', maximumFractionDigits: 0 }).format(keydata?.value) + "kCal"
                    : new Intl.NumberFormat('fr', { style: 'unit', unit: 'gram' }).format(keydata?.value)}</p>
                <p className="TagData">{keydata.label}</p>
            </div>

        </TagContainer>
    )
}


Tag.propTypes = {
    keydata: PropTypes.object,
}

export default Tag
