"use client";

import "@/styles/profileEditModal.css"
import { updateProfilePicture } from "@/utils/api-chat";
import { useState } from "react";

export default function profileEditModal({username, onClose, onProfileUpdated}) {
    const [ ProfilePicture, setProfilePicture ] = useState(null)

    const handleFileChange = async (e) =>{
        setProfilePicture(e.target.files[0]);
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        const formData = new formData();
        formData.append("profile_picture", ProfilePicture)

        const response = await updateProfilePicture(formData, username)

        if (response.status === 200){
            onProfileUpdated();
            onClose();
         }else {
            console.log("Error al actualizar el perfil")
         }
        }
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Editar Perfil</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="profile_picture">Foto de perfil:</label>
          <input
            type="file"
            style={{ marginTop: "10px" }}
            onChange={handleFileChange}
            name="profile_picture"
            accept="image/*"
          />
          <button
            type="submit"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            Enviar
          </button>&nbsp;&nbsp;
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
  
}

