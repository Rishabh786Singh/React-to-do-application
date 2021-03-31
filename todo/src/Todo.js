import React from 'react'
import { ListItem, ListItemText} from '@material-ui/core'

function todo(props) {
    return (
        <div>
            <ListItem>
                <ListItemText secondary={`Todo ${props.count +1}`} primary={props.todo} />
            </ListItem>
        </div>
    )
}

export default todo
