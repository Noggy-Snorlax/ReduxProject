
import { useEffect, useState } from 'react';
import dialogCSS from '../css/dialog-popout.module.css'; 
import Button from '@mui/material/Button';
import phoneIcon from "../img/phone-rotation-icon.png"
import { useDispatch, useSelector } from 'react-redux';
import LightBanner from "../img/LightXmas.png";
import { openCloseDialog } from '../reducer/ExpandDialog';

function ExpanDialogUI() {
    const isOpen = useSelector((state: any) => state.expandDialog.isOpen)
    const pictureURL = useSelector((state: any) => state.expandDialog.pictureURL)
    const dispatch = useDispatch();
    return (
        <>
            {isOpen ? (
                <>
                    <div className={dialogCSS.dialogDiv} onClick={()=>{dispatch(openCloseDialog());}}>
                        <div className={dialogCSS.dialogContainer}>
                            <img className={dialogCSS.dialogContainerImage} src={pictureURL} alt="" />
                        </div>
                       
                        
                    </div>
                </>)
                :
                (<>
              
                </>)

            }

        </>

    );
}

export default ExpanDialogUI;
