import React from 'react'
import { Button } from 'reactstrap'



export default function FaveButton(props){
  return (
    <Button className="fave-btn" {...props} role="button" tabIndex="0">
      Fave!
    </Button>
  );

}