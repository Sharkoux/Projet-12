import styled from "styled-components"


const TagContainer = styled.div`
    width: 255px;
    height: 125px;
    background-color: #FBFBFB;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
`



function Tag({image, keydata}) {

    console.log(keydata)
    return (
        <TagContainer >
            <img className="ImgTag" src={image}/>
            <p>yolo</p>
            <p>yolo</p>
        </TagContainer>
    )
}

export default Tag
