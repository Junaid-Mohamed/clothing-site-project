import React from 'react'
import MenuItem from "../menu-item/MenuItem"
import "./directory.scss"

import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"

import {selectDirectorySections} from "../../redux/directory/Directory.selectors"



function Directory({sections}) {
  return (
    <div className="directory-menu">
               { sections.map(({id,...otherSectionComponents})=>(
                   
                    <MenuItem key={id} {...otherSectionComponents} />
               ))
               }
            </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
