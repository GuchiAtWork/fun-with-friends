import React from "react";
import { removeArtifact, artifactSwitch } from "../actions/index";
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";

const DeleteConfirmation = () => {

  const dispatch = useDispatch();
  const { open, artifact } = useSelector(store => store.focusView)

  return (
    <IconButton onClick={() =>
      dispatch(removeArtifact({ artifact }))}>
      <DeleteIcon color="secondary" fontSize="default" />
    </IconButton>
  )
}

export default DeleteConfirmation;
