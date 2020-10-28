import React from 'react'
// import "./CustomButton.scss"
import {CustomButtonContainer} from "./CustomButton.styles"

function CustomButton({children,...props}) {
    return (
        <CustomButtonContainer  
        {...props}>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton

// className={`${inverted?'inverted':' '} ${isGoogleSignIn?'google-sign-in':' '} custom-button`}